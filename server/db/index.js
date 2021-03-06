require('dotenv').config();

// Database Models
const Sequelize = require('sequelize');
const courseModel = require('./model/course');
const conceptModel = require('./model/concept');
const answerModel = require('./model/answer');
const userModel = require('./model/user');
const userBadgeModel = require('./model/userbadge');
const userBudgetModel = require('./model/userbudget');
const badgeModel = require('./model/badge');
const levelModel = require('./model/level');

const { enterFakeData } = require('./testdata.js');

const {
  dialect,
  host,
  user,
  pwd,
  database,
} = process.env;

const options = {
  host,
  dialect,
  logging: false,
};

// Database initialization
const db = new Sequelize(database, user, pwd, options);

// Model creation
const Course = courseModel(db, Sequelize);
const Concept = conceptModel(db, Sequelize);
const Answer = answerModel(db, Sequelize);
const User = userModel(db, Sequelize);
const UserBadge = userBadgeModel(db, Sequelize);
const UserBudget = userBudgetModel(db, Sequelize);
const Level = levelModel(db, Sequelize);
const Badge = badgeModel(db, Sequelize);


// Database connection
db.sync({ force: true })
  .then(() => {
    // console.log('connected to database!');
  })
  .then(() => {
    enterFakeData(Course,
      Concept,
      Answer,
      User,
      UserBadge,
      UserBudget,
      Badge,
      Level);
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = {
  Course,
  Concept,
  Answer,
  User,
  UserBadge,
  UserBudget,
  Badge,
  Level,
};
