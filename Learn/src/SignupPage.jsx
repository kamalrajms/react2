import React, { useState } from 'react'
import useFetch from './UseFetch'
import { TrophySpin } from 'react-loading-indicators'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid2 from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



const SignupPage = () => {

  let { product, error, isLoading } = useFetch("http://localhost:4000/cloths")
  console.log(product);

  // {
  //   "id": "1",
  //     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       "price": 109.95,
  //         "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //           "category": "men's clothing",
  //             "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //               "rating": {
  //     "rate": 3.9,
  //       "count": 120
  //   }
  // },

  let [newProduct, setNewProduct] = useState({
    title: "",
    price: 109.95,
    description: "Your perfect pack for everyday use  padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0
    }
  })


  let handleChange = (e) => {

    let { value, name } = e.target

    let fieldName = name.split("rating.")[1]

    if (name.includes("rating.")) {

      setNewProduct({
        ...newProduct,
        rating: {
          ...newProduct.rating,
          [fieldName]: value
        }
      })

    } else {

      setNewProduct({
        ...newProduct,
        [name]: value
      })
    }
  }


  console.log(newProduct);




  if (isLoading) {


    return (
      <div style={{ height: "90vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <TrophySpin color="#32cd32" size="medium" text="loading" textColor="" />
      </div>
    )
  } else {

    return (
      <div>
        <h1>SignUp page</h1>
        <div>
          <Paper elevation={20} />
          <Typography varient="h5" >Create new product</Typography>
          <Grid2 component='form'>
            <TextField name='title' label="title" variant="outlined" value={newProduct.title} onChange={handleChange} /> <br />
            <TextField name='category' label="category" variant="outlined" value={newProduct.category} onChange={handleChange} />
          </Grid2>
          <Grid2 spacing={2}>
            <Grid2 size={6}>
              <TextField name='rating.rate' type='number' label='rate' variant='outlined' value={newProduct.rating.rate} onChange={handleChange} />
            </Grid2>
            <Grid2 size={6}>
              <TextField name='rating.count' type='number' label='count' variant='outlined' value={newProduct.rating.count} onChange={handleChange} />
            </Grid2>
          </Grid2>

          <Button variant="contained">Add</Button>
          <Paper />


        </div>
        {
          error && (<h1>{error}</h1>)
        }
      </div>
    )
  }
}

export default SignupPage
