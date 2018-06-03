import { FETCH_PRESIDENTS } from "./types";
import axios from "axios";

export const fetchPresidents = fetchType => dispatch => {
  console.log(fetchType)
  let path = fetchType == undefined ? "" : fetchType
  axios(`https://presidentsapi.azurewebsites.net/api/presidents/${path}`).then(results =>
    dispatch({
      type: FETCH_PRESIDENTS,
      payload: results.data
    })
  );
};
