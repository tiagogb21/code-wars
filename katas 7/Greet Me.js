var greet = function (name) {
  return name === ""
    ? ""
    : `Hello ${name[0].toUpperCase() + name.substring(1).toLowerCase()}!`;
};
