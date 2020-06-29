import CarsModelGenerated from "./generated/CarsModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CarsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CarsModelGenerated,
  ...customModel
};
