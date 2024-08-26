function onOpen() {
  SpreadsheetApp.getUi().createMenu('Diff Two Cells')
    .addItem('Diff Two Cells', 'openDialog')
    .addToUi();
}

function openDialog() {
  const html = HtmlService.createHtmlOutputFromFile('DiffSidebar')
    .setHeight(1500)
    .setWidth(1500);
  const selectedCells = getSelectedCells();
  SpreadsheetApp.getUi().showModalDialog(html, 'Diff Result: ' + selectedCells.cell1 + ',' + selectedCells.cell2);
}

function getSelectedCells() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const ranges = sheet.getActiveRangeList().getRanges();
  if (ranges.length === 0) {
    return { cell1: 'No cells selected', cell2: ''}
  }
  if (ranges.length === 2) {
    const cell1 = ranges[0].getCell(1, 1).getA1Notation();
    const cell2 = ranges[1].getCell(1, 1).getA1Notation();
    return {
      cell1: cell1,
      cell1Value: sheet.getRange(cell1).getValue(),
      cell2: cell2,
      cell2Value: sheet.getRange(cell2).getValue(),
    };
  }
  if (ranges.length == 1) {
    const cell1 = ranges[0].getCell(1, 1).getA1Notation();
    const cell2 = ranges[0].getCell(ranges[0].getNumRows(), ranges[0].getNumColumns()).getA1Notation();
    return {
      cell1: cell1,
      cell1Value: sheet.getRange(cell1).getValue(),
      cell2: cell2,
      cell2Value: sheet.getRange(cell2).getValue(),
    };
  }
  return { cell1: 'Select two cells', cell2: '' }
}
