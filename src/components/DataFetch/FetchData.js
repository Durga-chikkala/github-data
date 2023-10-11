import React from 'react'
import { useState } from 'react';
import Data from '../Data/Data';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import useFetch from '../useFetch/useFetch';

function FetchData(props) {
   console.log(props)
    const {loading,data,error}=useFetch(props.url,"GET");
    console.log(loading,data,error)
    if(loading){
        return (
            <Loading/>
        )
    }

    if(error){
        return (
            <Error/>
        )
    }

    return (
        <Data info={data}/>
    )
    }


export default FetchData