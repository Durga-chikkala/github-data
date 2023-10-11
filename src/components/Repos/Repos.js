import React from 'react'
import './Repos.css'
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import SquareRepos from '../SquareRepos/SquareRepos';
import useFetch from '../useFetch/useFetch';

function Repos(props) {
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
        <SquareRepos info={data}/>
    )
    
}

export default Repos