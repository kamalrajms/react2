import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './UseFetch'

const LoginPage = () => {

   let {userName} =  useParams()

  let { product, error, isLoading } = useFetch("http://localhost:4000/cloths")

 console.log(product);


 
   

  return (
    <div>
      <h1>Login Page - {userName}</h1>

      <div>
        {
          product.map((c,i,t)=>{
            return (
              <div key={c.id}>

                <h1>{c.name}</h1>

                <h2>{c.price}</h2>

              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LoginPage
