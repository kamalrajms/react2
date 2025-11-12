import React, { useState } from "react";
import useFetch from "./UseFetch";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid2 from "@mui/material/Grid";
import Button from "@mui/material/Button";

const ReadAPiData = () => {
  let { product, error, isLoading } = useFetch("http://localhost:4000/product");

  console.log(product);

  let [newProduct, setNewProduct] = useState({
    category: "",
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    id: "1",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    price: 109.95,
    rating: { rate: 0, count: 0 },
    title: "",
  });

  let handleChange = (e) => {
    let { value, name } = e.target;
    let fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setNewProduct({
        ...newProduct,
        [name]: value,
      });
    }
  };

  let style1 = {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    flexDirection: "column",
    gap: "20px",

    width: "300px",
  };

  let handleAdd = (e) => {
    e.preventDefault();

    fetch("http://localhost:4000/product", {
      method: "post",
      headers: {
        "contained-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
    .then(()=>{
        alert("data successfully sent")
    })
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Paper
        elevation={20}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h2" textAlign="center">
          create new Product
        </Typography>
        <Grid2 component="form" style={style1} onSubmit={handleAdd}>
          <TextField
            name="title"
            label="title"
            value={newProduct.title}
            variant="outlined"
            onChange={handleChange}
          />
          <TextField
            name="category"
            label="category"
            variant="outlined"
            value={newProduct.category}
            onChange={handleChange}
          />
          <TextField
            name="rating.count"
            type="number"
            label="count"
            variant="outlined"
            value={newProduct.rating.count}
            onChange={handleChange}
          />
          <TextField
            name="rating.rate"
            type="number"
            label="rate"
            variant="outlined"
            value={newProduct.rating.rate}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Contained
          </Button>
        </Grid2>
      </Paper>
    </div>
  );
};

export default ReadAPiData;
