const { program } = require("commander");
const contacts = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await contacts.getAll();
      return console.log(allContacts);
    case "getById":
      const oneContact = await contacts.getById(id);
      return console.log(oneContact);
    case "addContact":
      const newContact = await contacts.addContact({
        name,
        email,
        phone,
      });
      return console.log(newContact);
    case "removeContact":
      const deleteContact = await contacts.removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action, <type>")
  .option("-i, --id, <type>")
  .option("-n, --name, <type>")
  .option("-e, --email, <type>")
  .option("-p, --phone, <type>");

program.parse();
const options = program.opts();

invokeAction(options);
