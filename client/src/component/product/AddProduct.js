import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addproduct } from "../../JS/actions/productaction";

const AddProduct = () => {
  const data = [
    {
      value: "outfit",
      label: "outfit",
    },
    {
      value: "Accessoires",
      label: "Accessoires",
    },
    {
      value: "homme",
      label: "homme",
    },
    {
      value: "femme",
      label: "femme",
    },
    {
      value: "Chaussures",
      label: "Chaussures",
    },
    {
      value: "enfant",
      label: "enfant",
    },
  ];
  const datasize = [
    {
      value: "S",
      label: "s",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];
  const dataCOLOR = [
    {
      value: "BLUE",
      label: "BLUE",
    },
    {
      value: "WHITE",
      label: "WHITE",
    },
    {
      value: "RED",
      label: "RED",
    },
    {
      value: "GREEN",
      label: "GREEN",
    },
  ];

  // set value for default selection
  const [selectedCat, setselectedCat] = useState([]);
  const [selectedSize, setselectedSize] = useState([]);
  const [selectedColor, setselectedColor] = useState([]);
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setselectedCat(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeSize = (e) => {
    setselectedSize(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
  const handleChangeColor = (e) => {
    setselectedColor(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  //   use state for products
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    qtes: 0,
    // color: [],
    // category: [],
    // size: [],
  });
  const handleChanges = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const [img, setimg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("image", img);
    data.append("price", product.price);
    data.append("name", product.name);
    data.append("description", product.description);
    data.append("qtes", product.qtes);
    data.append("disponible", product.qtes ? true : false);
    data.append("category", selectedCat);
    data.append("size", selectedSize);
    data.append("color", selectedColor);

    dispatch(addproduct(data, navigate));
  };

  return (
    <div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            value={product.description}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity in stock</Form.Label>
          <Form.Control
            type="number"
            name="qtes"
            value={product.qtes}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChanges}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control
            type="file"
            name="file"
            onChange={(e) => setimg(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Select
            className="dropdown"
            placeholder="Select Option"
            value={data.filter((obj) => selectedCat.includes(obj.value))} // set selected values
            options={data} // set list of the data
            onChange={handleChange} // assign onChange function
            isMulti
            isClearable
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Size</Form.Label>
          <Select
            className="dropdown"
            placeholder="Select Option"
            value={datasize.filter((obj) => selectedSize.includes(obj.value))} // set selected values
            options={datasize} // set list of the data
            onChange={handleChangeSize} // assign onChange function
            isMulti
            isClearable
          />
        </Form.Group>{" "}
        <Form.Group className="mb-3">
          <Form.Label>Color</Form.Label>
          <Select
            className="dropdown"
            placeholder="Select Option"
            value={dataCOLOR.filter((obj) => selectedColor.includes(obj.value))} // set selected values
            options={dataCOLOR} // set list of the data
            onChange={handleChangeColor} // assign onChange function
            isMulti
            isClearable
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to="/products">
          <Button variant="danger" type="reset">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddProduct;
