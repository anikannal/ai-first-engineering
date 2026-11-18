/**
 * AI-First Engineering — Application Form Handler
 * Paste this entire file into Google Apps Script (script.google.com)
 * and deploy as a Web App (see setup instructions below).
 *
 * SETUP:
 * 1. Go to https://sheets.new — create a blank Google Sheet, name it "AI-First Applications"
 * 2. Click Extensions → Apps Script
 * 3. Delete the default code, paste this entire file
 * 4. Click Deploy → New deployment
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Authorize when prompted
 * 6. Copy the Web app URL that appears
 * 7. Paste it into index.html as the value of APPS_SCRIPT_URL
 *
 * UPDATING AN EXISTING DEPLOYMENT (keeps the same URL — no change to index.html):
 *    Deploy → Manage deployments → pencil icon → Version: New version → Deploy
 */

var SHEET_NAME = 'Applications'; // name of the tab in your Sheet
var SCRIPT_VERSION = '2026-11-18-phone'; // bump when you change this file

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Create the sheet tab if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
    }

    // Add header row on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Cohort', 'First Name', 'Last Name',
        'Email', 'University', 'Year of Study',
        'AI Tools Experience', 'Most Interesting Build', 'Why They Want In',
        'Phone (WhatsApp)'
      ]);
      sheet.getRange(1, 1, 1, 11).setFontWeight('bold');
    }

    // Sheets created before the phone field was added: add the missing header once
    if (sheet.getRange(1, 11).getValue() === '') {
      sheet.getRange(1, 11).setValue('Phone (WhatsApp)').setFontWeight('bold');
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.cohort === 'dec' ? 'Cohort 1 — Dec 2026' : 'Cohort 2 — Jan 2027',
      data.fname,
      data.lname,
      data.email,
      data.university,
      data.year === '3' ? '3rd Year' : '4th Year',
      data.aiExp,
      data.built,
      data.why,
      data.phone || ''
    ]);

    // Optional: send yourself an email notification on each submission
    // MailApp.sendEmail({
    //   to: 'anikannal@aexons.com',
    //   subject: 'New Application — ' + data.fname + ' ' + data.lname,
    //   body: 'Cohort: ' + data.cohort + '\nEmail: ' + data.email + '\nPhone: ' + data.phone + '\nUniversity: ' + data.university
    // });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', version: SCRIPT_VERSION, phoneReceived: data.phone || null }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handles browser preflight (CORS OPTIONS request)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', version: SCRIPT_VERSION }))
    .setMimeType(ContentService.MimeType.JSON);
}
