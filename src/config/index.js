import Sequelize from "sequelize";

//use env credentials here.
const sequelize = new Sequelize("tracman", "postgres", "", {
  dialect: "postgres",
});

export default sequelize;
