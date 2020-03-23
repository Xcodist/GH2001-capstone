const db = require("..");
const fs = require("fs");
const path = require("path");
// const companies = require('./companies.json')

const { User, Company } = require("../models");

const companySeed = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/companies.json'), 'utf8')
)

const userSeed = require("./userSeed");

console.log(userSeed);

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await User.bulkCreate(userSeed);
  const companies = await Company.bulkCreate(companySeed);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${companies.length} companies`);
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
