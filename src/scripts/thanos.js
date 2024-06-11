import { readContactsFromFile } from '../utils/readContactsFromFile.js';
import { saveContacts } from '../utils/saveContacts.js';

export const thanos = async () => {
  const allContacts = await readContactsFromFile();

  const updatedContacts = allContacts.filter(() => Math.random() >= 0.5);

  saveContacts(updatedContacts);
};

await thanos();
