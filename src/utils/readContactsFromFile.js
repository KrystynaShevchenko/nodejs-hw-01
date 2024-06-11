import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContactsFromFile() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data, null, 2);
  } catch (error) {
    console.error('Error reading contacts file:', error.message);
  }
}
