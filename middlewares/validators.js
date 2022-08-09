//Validator
const isEmpty = (string) => string && string.trim() === "";
const isEmptyArray = (array) => array.length === 0
exports.validateData = (data) => {
  let errors = {};
  if (isEmpty(data.reference) || isEmpty(data.name) || isEmpty(data.description) || isEmpty(data.image) || isEmptyArray(data.variants)) errors.message = "All fields are required";
  data.variants.forEach(element => {
    if(isEmpty(element.sku) || isEmpty(element.specification) || isNaN(element.price))
      return errors.message = "Please verify the data you've entered, something went wrong";
  });
  return {
    errors,
    valid: Object.keys(errors).length === 0,
  };
};

exports.formatData = (data) => {
  let content = {};
  if (!isEmpty(data.reference)) {
    content.reference = data.reference;
  }
  if (!isEmpty(data.name)) {
    content.name = data.name;
  }
  if (!isEmpty(data.description)) {
    content.description = data.description;
  }
  if (!isEmpty(data.image)) {
    content.image = data.image;
  }
  if (!isEmptyArray(data.variants)) {
    content.variants = data.variants;
  }

  return content;
};