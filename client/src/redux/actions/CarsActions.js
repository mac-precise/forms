import actionsFunction from "./generated/CarsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import carsApi from "../../api/carsApi";
 
 actionsFunction.loadcarsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return carsApi
     .getcarsList()
     .then(list => {
       dispatch(actionsFunction.loadcarsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
