import { createFakeContact } from '../utils/createFakeContact.js';
import { readContactsFromFile } from '../utils/readContactsFromFile.js';
import { saveContacts } from '../utils/saveContacts.js';

export const addOneContact = async () => {
  let existingContacts = await readContactsFromFile();

  const newContact = createFakeContact();
  const updatedContact = [...existingContacts, newContact];

  await saveContacts(updatedContact);

  console.log('One new contact has been added successfully.');
};

await addOneContact();
