const initialState = {
    allGames: [],
    gamesBackUp: [],
    gameDetail: {},
    genres: [],
    filtered: []
};

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_GAMES':
            return {
                ...state,
                allGames: action.payload,
                gamesBackUp: action.payload,
                filtered: action.payload
            };
        case 'CLEAN':
            return {
                ...state,
                gameDetail: {}
            };
        case 'BACK_TO_HOME':
            return{
                ...state,
            filtered: state.gamesBackUp
            };
        case 'GAME_DETAIL':
            return{
                ...state,
                gameDetail: action.payload
            };
        case 'SEARCH_BY_NAME':
            return{
                ...state,
                filtered: action.payload
            };
        case 'GET_GENRES':
            return{
                ...state,
                genres: action.payload
            };
        case 'FILTER_BY':
            if(action.payload === 'default'){
                return {...state, filtered: state.gamesBackUp}
            }
            if(action.payload === 'DB'){
                return {...state, filtered: state.gamesBackUp.filter((game)=>(typeof game.id === 'string'))}
            }
            if(action.payload === 'API'){
                return {...state, filtered: state.gamesBackUp.filter((game)=>(typeof game.id === 'number'))}
            }
            else {
                return {...state, filtered: state.gamesBackUp.filter((game)=>{
                    return game.genres.find((genre)=>{
                        return genre === action.payload})
                })}
            };
        case 'ORDER_BY':
            if(action.payload === 'A-Z'){
                return {...state, filtered: [...state.filtered].sort((prev, next)=>{
                    if(prev.name > next.name) return 1
                    if(prev.name < next.name) return -1
                    else return 0;
                })}
            }
            if(action.payload === 'desc'){
                return {...state, filtered: [...state.filtered].sort((prev,next)=> prev.rating - next.rating)}
            }
            if(action.payload === 'asc'){
                return {...state, filtered: [...state.filtered].sort((prev,next)=> next.rating - prev.rating)}
            }
            else {
                return {...state, filtered: state.gamesBackUp}
            }

        default: 
            return state;
    };
 
}