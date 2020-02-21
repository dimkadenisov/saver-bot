import googleapis from 'googleapis';

import credentials from '../../../credentials/googleDriveCredentials.json';

const scopes = ['https://www.googleapis.com/auth/drive'];
const { google } = googleapis;

const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);
const googleDrive = google.drive({ version: 'v3', auth });

export default googleDrive;
