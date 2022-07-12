import React from "react"
import "./App.css"
import { useState, useEffect} from "react"
import GiphyList from "./Components/GiphyList"
import { Route } from "react-router-dom";

const App =()=>{
 const [giphy, setGiphy]=useState(null)

 useEffect(()=>{
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=wK5f397gK7oRFdHV0rlksU3XR9ZUvEaT&limit=25&rating=g")
    .then((res)=> res.json())
    .then(data => setGiphy(data.data))
 },[])
    return(
        <div>
            <h1>Giphy App</h1>
            <Route path='/'>
                {giphy && <GiphyList gif={giphy} msg="GIPHYS COMPONENT" />}
            </Route>
        </div>
    )
}
export default App