import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]', 'utf-8');

    console.log('All contacts removed successfully.');
  } catch (error) {
    console.error('Error removing contacts:', error);
  }
};

await removeAllContacts();
