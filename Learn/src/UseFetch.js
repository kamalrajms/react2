import { useEffect, useState } from "react";
import axios from 'axios'

function useFetch(url){
    let [product,setProduct] = useState([])
    let [error,setError] = useState("")
    let [isloading,setIsLoading] = useState(true)
      
    console.log(url);
    
    
    useEffect(()=>{

        let fetchApi = async()=>{

            try{

              let response = await  axios.get(url)

               setProduct(response.data)
               
               

            }
            
            catch(error){
                setError(error.message)
            }
            finally{
                setIsLoading(false)
            }

        }

        fetchApi()

    },[])
    return {product,error,isloading}
}

export default useFetch;