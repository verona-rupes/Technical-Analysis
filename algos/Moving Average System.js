var count = 0;

function init() {
  addParameter("MA Period", 25, "Moving Average Period");
  addParameter("Share Size", 100, "Share size to trade on each order");
  setMinBars(25);
}

function start() {
  if (!isValid())
    return;

  var timeSeries = getTimeSeries(getSymbol());
  var shareSize = getParameter("Share Size");
  var account = getAccount();
  var average = getCurrentAverage();
  var close = getCurrentClose();

  if (close > average) //buy/buy to cover
  {
    //if we have a short, close it first
    var shortQty = account.getPositionQuantity(getSymbol(), POSITIONTYPE_SHORT);
    if (shortQty > 0)
      account.placeLimitOrder(getSymbol(), shortQty, close, ACTIONTYPE_BUYTOCOVER, TIFTYPE_GTC);

    //if we don't have a long, open it
    var longQty = account.getPositionQuantity(getSymbol(), POSITIONTYPE_LONG);
    if (longQty == 0)
      account.placeLimitOrder(getSymbol(), shareSize, close, ACTIONTYPE_BUY, TIFTYPE_GTC);
  }
  else if (close < average) //sell/sell short
  {
    //if we have a long, close it first
    var longQty = account.getPositionQuantity(getSymbol(), POSITIONTYPE_LONG);
    if (longQty > 0)
      account.placeLimitOrder(getSymbol(), longQty, close, ACTIONTYPE_SELL, TIFTYPE_GTC);

    //if we don't have a short, open it
    var shortQty = account.getPositionQuantity(getSymbol(), POSITIONTYPE_SHORT);
    if (shortQty == 0)
      account.placeLimitOrder(getSymbol(), shareSize, close, ACTIONTYPE_SELLSHORT, TIFTYPE_GTC);
  }
}

function isValid() {
  var maPeriod = getParameter("MA Period");
  if (maPeriod <= 0 || maPeriod >= 1000) {
    Debug.writeLine("invalid MA Period. value should be between 1 and 1000");
    return false;
  }

  //get current time series object		
  var timeSeries = getTimeSeries(getSymbol());
  var timeSeriesCount = timeSeries.count();
  if (timeSeriesCount < maPeriod) {
    Debug.writeLine("not enough bars to calculate (" + timeSeriesCount + "/" + maPeriod + ")");
    return false;
  }

  return true;
}

function getCurrentAverage() {
  var maPeriod = getParameter("MA Period");
  var timeSeries = getTimeSeries(getSymbol());
  var timeSeriesCount = timeSeries.count();

  //create Array of close prices
  var prices = new Array(maPeriod);
  var index = maPeriod - 1;
  for (var i = timeSeriesCount - 1; i >= timeSeriesCount - maPeriod;
    i-- , index--)
    prices[index] = timeSeries.close(i);

  var average = new Array();
  TechnicalAnalysis.MA(maPeriod, TechnicalAnalysis.MA_SMA, prices, average);

  return average;
}

function getCurrentClose() {
  var timeSeries = getTimeSeries(getSymbol());
  return timeSeries.close(timeSeries.count() - 1);
}

function onOrder(order, orderResults) {
  var errors = orderResults.getErrors();
  if (errors.length == 0) {
    Debug.writeLine("Successfully placed order " + order.toString());
  }
  else {
    Debug.writeLine("There are " + errors.length + " errors in current order");
    for (var i = 0; i < errors.length; i++) {
      Debug.writeLine("error " + i + ": " + errors[i]);
    }
  }
}