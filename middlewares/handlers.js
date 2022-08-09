const { create, updateOne, readAll, readOne, deleteOne } = require("./requests");
const { validateData, formatData } = require("./validators");
const { switchStatus } = require("./statusResponses");
const {Product, Variant} = require("../models/product");

//CREATE
exports.handleCreateOne = async (content) => {
  const { valid, errors } = validateData(content);
  if (!valid) return switchStatus({ status: 400, message: errors });
  let dataFormated = formatData(content);
  return switchStatus(await create(Product, dataFormated));
};
//READ ALL
exports.handleReadAll = async () => {
  return switchStatus(await readAll(Product));
};
//READ ONE
exports.handleReadOne = async (id) => {
  return switchStatus(await readOne(Product, id));
};
//UPDATE ONE
exports.handleUpdateOne = async (content, id) => {
  const { valid, errors } = validateData(content);
  if (!valid) return switchStatus({ status: 400, message: errors });
  let dataFormated = formatData(content);
  return switchStatus(await updateOne(Product, id, dataFormated));
};
// DELETE ONE
exports.handleDeleteOne = async (id) => {
  return switchStatus(await deleteOne(Product, id));
};