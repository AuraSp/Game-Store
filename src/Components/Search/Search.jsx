import React, { useEffect, useState } from 'react'
import './Search.css'
import Data from '../../Data/Data.json';

const Search = (props) => {
    let [searchTerm, setSearchTerm] = useState(props.searchTerm)

    useEffect(() => {
      setSearchTerm(props.searchTerm)
    }, [props.searchTerm])
    Data.map((product) =>{
        console.log(product.name)
        console.log(props.searchTerm)
    })


    function clickedProduct(name ,price, trailer){
        props.setProduct(name, price, trailer);
    }
  return (
    <div className='searchPage'>
            <div className='searchTerm'>Searching for: {props.searchTerm}</div>
            <div className='searchResults'>
                {Data.map((product) =>(
                    product.name.toLowerCase().includes(props.searchTerm.toLowerCase()) && <a href="#" onClick={(e)=>{clickedProduct(product.name, product.price, product.trailerUrl )}}>{product.name}, Tags: {product.tags[0]} {product.tags[1]} {product.tags[2]} {product.tags[3]}, Price: {product.price}$</a>
                ))}
            </div>
    </div>
  )
}

export default Search