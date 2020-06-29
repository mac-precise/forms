// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_forms_db";
import UserModel from "../models/Forms_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.forms_db.host +
        ":" +
        properties.forms_db.port +
        "//" +
        properties.forms_db.user +
        "@" +
        properties.forms_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.forms_db.name,
      properties.forms_db.user,
      properties.forms_db.password,
      {
        host: properties.forms_db.host,
        dialect: properties.forms_db.dialect,
        port: properties.forms_db.port,
        logging: false
      }
    );
    this.dbConnection_forms_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_forms_db;
  }
}

export default new Database();
