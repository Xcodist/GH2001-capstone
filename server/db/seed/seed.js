const db = require("..");
const fs = require("fs");
const path = require("path");

const { User, Company } = require("../models");

const upperCaseCompanies = JSON.parse(
  fs.readFileSync(path.join(__dirname, '/companies.json'), 'utf8')
)

let companySeed = upperCaseCompanies.map((company) => {
  let newObj = {
    name: '',
    rating: company.rating
  }
    for (let i = 0; i < company.name.length; i++) {
      let currentLetter = company.name[i];
      newObj.name += currentLetter.toLowerCase()
    }
    return newObj
})

const userSeed = require("./userSeed");

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
