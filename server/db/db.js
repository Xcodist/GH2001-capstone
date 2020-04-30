const Sequelize = require("sequelize");
const pkg = require("../../package.json");

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const db = new Sequelize(
  process.env.HEROKU_URL || `postgres://localhost:5432`,
  {
    logging: false
  }
);
module.exports = db;

//REFER BACK TO BOILERPLATE -- took out mocha code below

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}


