import React from "react";



export default function Videogame({name, background_image, genres}) {

    return (
        <>
        <div> 
            <img src={background_image} alt='not found' />
            <p>name:{name}</p>
            {/* <p>genres:{" " + genres.split().join(",")}</p> */}
            <p>genres: {genres.split(" ").join(", ")}</p>
        </div>
        </>
    )
}