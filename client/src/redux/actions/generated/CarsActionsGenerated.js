/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN CarsActionsGenerated.js PLEASE EDIT ../CarsActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import CarsApi from "../../../api/CarsApi";

let actionsFunction = {

  //CRUD METHODS

  // Get cars
  loadCars: function(id) {
    return function(dispatch) {
      return CarsApi
        .getOneCars(id)
        .then(cars => {
          dispatch(actionsFunction.loadCarsSuccess(cars));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCarsSuccess: function(cars) {
    return { type: types.GET_CARS_SUCCESS, payload: cars };
  },

  // Load  list
  loadCarsList: function() {
    return function(dispatch) {
      return CarsApi
        .getCarsList()
        .then(list => {
          dispatch(actionsFunction.loadCarsListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadCarsListSuccess: function(list) {
    return { type: types.LIST_CARS_SUCCESS, payload: list };
  },


};

export default actionsFunction;