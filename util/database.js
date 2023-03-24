const Sequelize = require("sequelize");

const sequelize = new Sequelize("book-appointment", "root", "9122892311", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
