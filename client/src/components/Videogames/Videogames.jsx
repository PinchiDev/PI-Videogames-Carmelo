
//                 <select name="" id="">
//                     <option value="">A-Z</option>
//                     <option value="">Z-A</option>
//                 </select>
//                 <select>
//                 <option value="">Rating +</option>
//                 <option value="">Rating -</option>
//                 </select>
//                 <select>
//                 <option value="">Genres</option>
//                 </select>
//                 <select>
//                 <option value="">AllVideogames</option>
//                 <option value="">VideogamesDB</option>
//                 <option value="">VideogamesAPI</option>
//                 </select>



import React, { Fragment } from "react";
import {useState , useEffect} from 'react';
import { useDispatch , useSelector} from "react-redux";
import {allGames,} from "../../actions/actions";
import Videogame from '../VideoGame/Videogame';
import { Link } from 'react-router-dom';
import  NavBar from '../NavBar/NavBar';


export function Videogames (){

const dispatch = useDispatch()
const allgames = useSelector((state)=> state.allGames);



useEffect(()=>{
    
    dispatch(allGames())
},[dispatch]);


return(
    <>
    <NavBar />
    <div > 
        <h1>Videogames Store</h1>
            <div >
            {allgames?.map((e)=>{
            return(
                <div >
                <Videogame
                key={e.id}
                name={e.name}
                background_image={e.background_image}
                genres={e.genres.map(e => e.name).join(" ")}
                />
                </div>
            )
            })}
            </div>
    </div>
    </>
)
};