const { HttpError } = require("../../helpers");
// const contacts = require("../../models/contacts");
const Contact = require("../../models/contact");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  // const result = await contacts.getContactById(contactId);
  // if (!result) {
  //   throw HttpError(404, "Not found");
  // }
  // res.json(result);
};

module.exports = getById;
