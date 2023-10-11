import { useState,useEffect } from 'react'
// we have three states to fetch the data 
// data isn't available but still loading
// got the data 
// got an error 
export default function useFetch(url,method,body) {
    console.log("url:",url)
    const [data,setData]=useState();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState();
    useEffect(()=>{
        fetch(url,{method:method,body:JSON.stringify(body),dataType: 'jsonp',
        headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
        }})
        .then(data=>data.json())
        .then(setData)
        .then(()=>setLoading(false))
        .catch(setError)
    },[url])
  return  {loading,data,error}
}