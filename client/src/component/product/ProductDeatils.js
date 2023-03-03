import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getoneproduct } from "../../JS/actions/productaction";
import { getproductreviews,addreview } from "../../JS/actions/reviewaction";

const ProductDeatils = () => {
  const dispatch = useDispatch();
  const { idprod } = useParams();
  console.log(idprod);
  useEffect(() => {
    dispatch(getoneproduct(idprod));
    dispatch(getproductreviews(idprod));
  }, [idprod]);

  const proddetails = useSelector((state) => state.prod.proddetails);
  const loading = useSelector((state) => state.prod.loading);
  const reviews = useSelector((state) => state.rev.reviews);
  const Rloading = useSelector((state) => state.rev.loading);
  const [reviewproduct, setreviewproduct] = useState({
    rate: 0,
    comment: "",
  });
  const handleChange = (e) => {
    setreviewproduct({ ...reviewproduct, [e.target.name]: e.target.value });
  };
  const handleSumbit = () => { 
    if (reviewproduct.comment) {
      dispatch(addreview(idprod,{...reviewproduct,product:idprod}))
      setreviewproduct({
        rate: 0,
        comment: "",
      })
    }
   }
  return (
    <div className="container">
      {loading ? (
        "load"
      ) : (
        <div className="row">
          <div className="col-6">
            <img src={proddetails?.img} alt="" width={"250px"} />
            <p>{proddetails?.name}</p>
          </div>
          <div className="col-6">
            <p>{proddetails?.description}</p>
            <div>
              {proddetails?.category.map((el) => (
                <span>{el}</span>
              ))}
            </div>
            <div>
              {proddetails.size.map((el) => (
                <span>{el}</span>
              ))}
            </div>
            <div>
              {proddetails?.color.map((el) => (
                <span>{el}</span>
              ))}
            </div>
          </div>
        </div>
      )}
      <div>
        <input
          type="number"
          name="rate"
          id=""
          value={reviewproduct.rate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="comment"
          id=""
          value={reviewproduct.comment}
          onChange={handleChange}
        />
        <button onClick={handleSumbit}>ADD REVIEW</button>
        {Rloading
          ? "load"
          : reviews?.map((el) => (
              <div>
                <p>{el.rate}</p>
                <p>{el.comment}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductDeatils;
