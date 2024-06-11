import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function saveContacts(updatedContact) {
  try {
    const contactsJSON = JSON.stringify(updatedContact);
    await fs.writeFile(PATH_DB, contactsJSON);
    console.log('Contacts have been successfully saved!');
  } catch (error) {
    console.error('Error saving contacts:', error.message);
  }
}
