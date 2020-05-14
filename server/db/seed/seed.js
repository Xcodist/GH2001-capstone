const db = require("..");
const fs = require("fs");
const path = require("path");
<<<<<<< HEAD
require('sequelize')
=======
>>>>>>> master

const { User, Company, Subsidiary } = require("../models");

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
const {amazonSeed, walmartSeed, wayfairSeed, alibabaSeed, ikeaSeed, ebaySeed, rakutenSeed} = require('./subsidiarySeed')

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const users = await User.bulkCreate(userSeed);
  const companies = await Company.bulkCreate(companySeed);

  const amazon = await Company.findByPk(3403)
  const amazonSubsidiaries =  await Subsidiary.bulkCreate(amazonSeed)
  await amazon.setSubsidiaries(amazonSubsidiaries)

  const walmart  = await Company.findByPk(2166)
  const walmartSubsidiaries =  await Subsidiary.bulkCreate(walmartSeed)
  await walmart.setSubsidiaries(walmartSubsidiaries)

  const wayfair = await Company.findByPk(8013)
  const wayfairSubsidiaries =  await Subsidiary.bulkCreate(wayfairSeed)
  await wayfair.setSubsidiaries(wayfairSubsidiaries)

  const alibaba = await Company.findByPk(5229)
  const alibabaSubsidiaries =  await Subsidiary.bulkCreate(alibabaSeed)
  await alibaba.setSubsidiaries(alibabaSubsidiaries)

  const ikea = await Company.findByPk(924)
  const ikeaSubsidiaries =  await Subsidiary.bulkCreate(ikeaSeed)
  await ikea.setSubsidiaries(ikeaSubsidiaries)

  const rakuten = await Company.findByPk(5284)
  const rakutenSubsidiaries =  await Subsidiary.bulkCreate(rakutenSeed)
  await rakuten.setSubsidiaries(rakutenSubsidiaries)


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
