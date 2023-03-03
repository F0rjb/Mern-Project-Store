import {
  ADDPRODUCTSUCCESS,
  DELETEPRODUCTSUCCESS,
  EDITPRODUCTSUCCESS,
  FAILD,
  GETALLPRODCUTSSUCCESS,
  GETONEPRODCUTSSUCCESS,
  LOADING,
} from "../actiontypes/producttypes";
import axios from "axios";

/**
 * @route get /product/
 * @description get all products
 * @access public
 */
export const getallproducts = (priceq) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const { data } = await axios.get(
      `/product/${priceq ? "?priceq=" + priceq : ""}`
    );
    dispatch({ type: GETALLPRODCUTSSUCCESS, payload: data.products });
  } catch (error) {
    dispatch({ type: FAILD, payload: error });
  }
};
/**
 * @route get /product/:idprod
 * @description get one product
 * @access public
 */
export const getoneproduct = (idprod) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const { data } = await axios.get(`/product/${idprod}`);
    dispatch({ type: GETONEPRODCUTSSUCCESS, payload: data.product });
  } catch (error) {
    dispatch({ type: FAILD, payload: error });
  }
};
export const addproduct = (newProduct, navigate) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const res = await axios.post("/product/add", newProduct);
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: ADDPRODUCTSUCCESS });
    dispatch(getallproducts());
    navigate("/product");
  } catch (error) {
    console.log(error);
    dispatch({
      type: FAILD,
      payload: error,
    });
  }
};
/**
 * @method DELETE /product/:id
 * @description delete one product
 * @acces public
 */
export const deleteproduct = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const res = await axios.delete(`/product/${id}`);
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: DELETEPRODUCTSUCCESS });
    dispatch(getallproducts());
  } catch (error) {
    dispatch({
      type: FAILD,
      payload: error,
    });
  }
};
/**
 * @method PUT /product/:id
 * @description update one product
 * @acces public
 */
export const editproduct =
  (id, editedProduct, navigate) => async (dispatch) => {
    dispatch({
      type: LOADING,
    });

    try {
      const res = await axios.put(`/product/${id}`, editedProduct);
      console.log("res", res.data);
      alert(`${res.data.msg}`);
      dispatch({ type: EDITPRODUCTSUCCESS });
      dispatch(getallproducts());
      navigate("/product");
    } catch (error) {
      dispatch({
        type: FAILD,
        payload: error,
      });
    }
  };
