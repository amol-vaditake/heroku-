var hbs = require("hbs");

hbs.registerHelper("constructUpdate", function () {
  return `/shoe/update/${this.id}`;
});

hbs.registerHelper("constructDelete", function () {
  return `/shoes/delete/${this.id}?cadbury=DELETE`;
});

hbs.registerHelper("constructUpdateAPI", function () {
  return `/shoes/update/${this.shoe.id}?cadbury=PATCH`;
});