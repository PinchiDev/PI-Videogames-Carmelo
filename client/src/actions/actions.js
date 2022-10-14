import axios from 'axios';
//import { info } from 'console';


export function searchByName(name) {
    return function (dispatch) {
        fetch(`/videogames?name=${name}`)
        .then((res)=>{
            console.log(res)
            dispatch({ type: 'SEARCH_BY_NAME', payload: res.data})
        })
        .chatch((err) =>{
            return err;
        });
    };
};

export function getGenres() {
    return function (dispatch){
    fetch('/genres')
    .then((res)=>{
       dispatch({type: 'GET_GENRES', payload: res.data});
    })
    .catch((err)=>{
        return err;
    })
  };
};

export function gameDetail(id) {
    return function (dispatch) {
        fetch(`/videogame/${id}`)
        .then((res)=>{
            dispatch({type: 'GAME_DETAIL', payload: res.data});
        })
        .catch((err)=>{
            return err;
        });
    };
};

export function allGames() {
//     return function(dispatch) {
//         fetch('http://localhost:3001/videogames')
// //        .then(e =>e.JSON)
//         .then((res)=>{
//             dispatch({type: 'GET_ALL_GAMES', payload: res.data});
//         })
//         .catch((err)=>{
//             return err;
//         });
//     };
 return async function(dispatch) {
    try {
        const info = await axios.get('http://localhost:3001/videogames');
        return dispatch({
            type: 'GET_ALL_GAMES',
            payload: info.data
        });
    }
    catch(err) {
        console.log(err)
    }
 }
};

export function backToHome (){
    return function(dispatch){
        dispatch({type: 'BACK_TO_HOME'})
    };
};

export function clean() {
    return function(dispatch) {
        dispatch({type: 'CLEAN'})
    };
};

export function orderBy(order) {
    return function(dispatch) {
        dispatch({type: 'ORDER_BY', payload: order});
    };
};

export function filterBy(order) {
    return function(dispatch){
        dispatch({type: 'FILTER_BY', payload: order});
    };
};