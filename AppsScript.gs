/**
 * Google Apps Script — Contact Form to Google Sheet
 * 
 * SETUP:
 * 1. Create a Google Sheet. Note its name (default "Sheet1") or rename a sheet to "Contacts".
 * 2. In the Sheet, go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this file's contents.
 * 4. Click Deploy > New deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL (ends with /exec).
 * 6. In App.jsx, replace SCRIPT_URL with this deployment URL.
 *
 * The sheet will get a header row (Timestamp, Name, Email, Message) automatically
 * on the first submission, then one row per submission after.
 */

const SHEET_NAME = "Contacts";

function doPost(e) {
  try {
    const sheet = getSheet();
    const data = JSON.parse(e.postData.contents);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Message"]);
    }

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.message || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

// Optional: test GET request to confirm deployment works
function doGet() {
  return ContentService.createTextOutput("Contact form API is live.");
}
