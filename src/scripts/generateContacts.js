import { createFakeContact } from '../utils/createFakeContact.js';
import { readContactsFromFile } from '../utils/readContactsFromFile.js';
import { saveContacts } from '../utils/saveContacts.js';

const generateContacts = async (number) => {
  let existingContacts = await readContactsFromFile();
  let newContacts = [];

  for (let i = 0; i < number; i++) {
    const newContact = createFakeContact();
    newContacts.push(newContact);
  }

  const updatedContacts = [...existingContacts, ...newContacts];

  await saveContacts(updatedContacts);

  console.log(`Generated and saved ${number} new contacts.`);
};

await generateContacts(5);
