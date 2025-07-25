// // TODO(developer): Set to client ID and API key from the Developer Console
// const CLIENT_ID = '957800054579-hqkmggo4moap81r08e2mq1stktedvdqt.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyCo51QnHOkeax1-tMGcmIS4Ygo2-qr1qd8';

// // Discovery doc URL for APIs used by the quickstart
// const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// // Authorization scopes required by the API; multiple scopes can be
// // included, separated by spaces.
// const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

// let tokenClient;
// let gapiInited = false;
// let gisInited = false;

// document.getElementById('authorize_button').style.visibility = 'hidden';
// document.getElementById('signout_button').style.visibility = 'hidden';

// document.getElementById('gapi').addEventListener("load", gapiLoaded());
// document.getElementById('gis').addEventListener("load", gisLoaded());

// /**
//  * Callback after api.js is loaded.
//  */
// function gapiLoaded() {
//     gapi.load('client', initializeGapiClient);
// }

// /**
//  * Callback after the API client is loaded. Loads the
//  * discovery doc to initialize the API.
//  */
// async function initializeGapiClient() {
//     await gapi.client.init({
//         apiKey: API_KEY,
//         discoveryDocs: [DISCOVERY_DOC],
//     });
//     gapiInited = true;
//     maybeEnableButtons();
// }

// /**
//  * Callback after Google Identity Services are loaded.
//  */
// function gisLoaded() {
//     tokenClient = google.accounts.oauth2.initTokenClient({
//         client_id: CLIENT_ID,
//         scope: SCOPES,
//         callback: '', // defined later
//     });
//     gisInited = true;
//     maybeEnableButtons();
// }

// /**
//  * Enables user interaction after all libraries are loaded.
//  */
// function maybeEnableButtons() {
//     if (gapiInited && gisInited) {
//         document.getElementById('authorize_button').style.visibility = 'visible';
//     }
// }

// /**
//  *  Sign in the user upon button click.
//  */
// function handleAuthClick() {
//     tokenClient.callback = async (resp) => {
//         if (resp.error !== undefined) {
//             throw (resp);
//         }
//         document.getElementById('signout_button').style.visibility = 'visible';
//         document.getElementById('authorize_button').innerText = 'Refresh';
//         await getProductos();
//     };

//     if (gapi.client.getToken() === null) {
//         // Prompt the user to select a Google Account and ask for consent to share their data
//         // when establishing a new session.
//         tokenClient.requestAccessToken({ prompt: 'consent' });
//     } else {
//         // Skip display of account chooser and consent dialog for an existing session.
//         tokenClient.requestAccessToken({ prompt: '' });
//     }
// }

// /**
//  *  Sign out the user upon button click.
//  */
// function handleSignoutClick() {
//     const token = gapi.client.getToken();
//     if (token !== null) {
//         google.accounts.oauth2.revoke(token.access_token);
//         gapi.client.setToken('');
//         document.getElementById('content').innerText = '';
//         document.getElementById('authorize_button').innerText = 'Authorize';
//         document.getElementById('signout_button').style.visibility = 'hidden';
//     }
// }

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
// async function listMajors() {
//     let response;
//     try {
//         // Fetch first 10 files
//         response = await gapi.client.sheets.spreadsheets.values.get({

//             spreadsheetId: '1amL7XhJcrlQSg9nvwWuOGlYY9G1pfJuXTsTEezHUCRw',

//             // spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
//             // range: 'Class Data!A2:E',
//             range: 'Hoja 1!A:D',

//         });
//     } catch (err) {
//         document.getElementById('content').innerText = err.message;
//         return;
//     }
//     const range = response.result;
//     if (!range || !range.values || range.values.length == 0) {
//         document.getElementById('content').innerText = 'No values found.';
//         return;
//     }
//     // Flatten to string to display
//     const output = range.values.reduce(
//         (str, row) => `${str}${row[0]}, ${row[2]}\n`, // row[0] = Nombre, row[2] = Descripción
//         'Nombre, Descripción:\n');

//     document.getElementById('content').innerText = output;
// }
