const { HttpError } = require("../../helpers");
// const contacts = require("../../models/contacts");
const Contact = require("../../models/contact");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  // const result = await contacts.updateContact(contactId, req.body);
  // console.log(result);
  // if (!result) {
  //   throw HttpError(404, "Not found");
  // }
  // res.json(result);
};
module.exports = updateById;
