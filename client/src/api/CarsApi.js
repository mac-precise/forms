import CarsApiGenerated from "./generated/CarsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CarsApi extends CarsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Cars List
  static getCarsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/carss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CarsApi;