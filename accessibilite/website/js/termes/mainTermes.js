import { TermesDataCollection } from "./TermesDataCollection.js";
import { TermesTableGenerator } from "./TermesTableGenerator.js";

const collection = new TermesDataCollection();
await collection.load();
const table = new TermesTableGenerator(collection);
table.actualiser();