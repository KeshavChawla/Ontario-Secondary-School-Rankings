// This function is used to check the trend corelations for each school with the data provided by the Fraser Institute

function checkTrend(inputval, preval) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  //var values = rows.getValues();
  var returnval =  "NO CHANGE";

  var names = sheet.getRange("K2:K50");
    var namesTwo = sheet.getRange("M2:M72");

 // return Names.getCell(12, 1).getValue();

  for (var y = 1; y < 50; y++) {
    if (inputval!=null && preval.equals("") && inputval.equals(names.getCell(y, 1).getValue()))
    {
      returnval = "UPTREND"
      break;
    }
    else {}
  }
  for (var y = 1; y < 72; y++) {
    if (inputval!=null && preval.equals("") && inputval.equals(namesTwo.getCell(y, 1).getValue()))
    {

      returnval =  "DOWNTREND"
      break;
    }
        else {}
  }
  return returnval;
  }
