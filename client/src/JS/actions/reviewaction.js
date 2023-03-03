import { ADDREVIEWSSUCCESS, GETPRODUCTREVIEWSSUCCESS, RFAILD, RLOADING } from "../actiontypes/reviewtypes";
import axios from "axios";
/**
 * @route get /review/:idprod
 * @description get product reviews
 * @access public
 */
export const getproductreviews = (idprod) => async (dispatch) => {
    dispatch({ type: RLOADING });
    try {
      const { data } = await axios.get(`/review/${idprod}`);
      dispatch({ type: GETPRODUCTREVIEWSSUCCESS, payload: data.reviews});
    } catch (error) {
        console.log(error)
      dispatch({ type: RFAILD, payload: error });
    }
  }; 
   /**
/**
 * @route POST /review/add/:idprod
 * @description add new review
 * @access public
 */

   export const addreview = (idprod,newreview) => async (dispatch) => {
    dispatch({ type: RLOADING });
    try {
      const { data } = await axios.post(`/review/add/${idprod}`,newreview);
      dispatch({ type: ADDREVIEWSSUCCESS});
      dispatch(getproductreviews(idprod))
    } catch (error) {
        console.log(error)
      dispatch({ type: RFAILD, payload: error });
    }
  }; 