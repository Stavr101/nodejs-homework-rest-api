// const contacts = require("../../models/contacts");

const { Contact } = require("../../models/contact");

const add = async (req, res, next) => {
  console.log(req.body);
  const result = await Contact.create(req.body);
  console.log(result);
  res.status(201).json(result);
};
module.exports = add;
