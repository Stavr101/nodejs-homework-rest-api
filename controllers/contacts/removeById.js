const { HttpError } = require("../../helpers");
// const contacts = require("../../models/contacts");
const Contact = require("../../models/contact");

const removeById = async (req, res, next) => {
  const { contactId } = req.params;
  // const result = await contacts.removeContact(contactId);
  // if (!result) {
  //   throw HttpError(404, "Not found");
  // }
  // res.json({ message: "Delete succes" });
  // res.json({ message: "template message" });
};

module.exports = removeById;
