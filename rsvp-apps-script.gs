/**
 * RSVP collector for the wedding site — saves each RSVP as a row in a Google Sheet.
 *
 * Setup (5 minutes):
 *  1. Create a Google Sheet (e.g. "Wedding RSVPs").
 *  2. Extensions → Apps Script. Replace the code with this file. Save.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me      Who has access: Anyone
 *  4. Copy the Web app URL and paste it into CONFIG.rsvpEndpoint in index.html.
 */
var HEADERS = ["submitted", "name", "phone", "side", "attending", "events", "guests", "message"];

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  var p = e.parameter || {};
  sheet.appendRow(HEADERS.map(function (h) { return p[h] || ""; }));
  return ContentService.createTextOutput("ok");
}
