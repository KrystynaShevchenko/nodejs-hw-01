import { PATH_DB } from '../constants/contacts.js';
import { readContactsFromFile } from '../utils/readContactsFromFile.js';

export const countContacts = async () => {
  try {
    const contacts = await readContactsFromFile(PATH_DB);
    return contacts.length;
  } catch (error) {
    console.error('Error counting contacts:', error);
    return 0;
  }
};

console.log(await countContacts());
