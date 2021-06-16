import axios from "axios"

//constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: [],
    offset: 0,
    limit:20
}

const LISTAR_POKEMONES_EXITO = 'LISTAR_POKEMONES_EXITO';

//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case LISTAR_POKEMONES_EXITO:
            return {...state, ...action.payload};
        default:
            return state;
    }
}

//actions
//Desplazarse a la primera pagina de los pokemones
export const inicioPokemonesAccion = (limit) => async (dispatch, getState) => {
    try { 
        const offset = 0;
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        dispatch({
            type: LISTAR_POKEMONES_EXITO,
            payload: {...res.data, offset: offset, limit: limit}
        });
    } catch(error){
        console.log(error);
    }
}

//Desplazarse a la siguiente pagina a la actual de la lista de pokemones
export const siguientePokemonAccion = () => async (dispatch, getState) => {
    try { 
        const {offset, count, limit} = getState().pokemones;
        const siguiente = offset + limit;

        if(siguiente < count){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${siguiente}&limit=${limit}`);
            dispatch({
                type: LISTAR_POKEMONES_EXITO,
                payload: {...res.data, offset: siguiente}
            });
        }
        
    } catch(error){
        console.log(error);
    }
}

//Desplazarse a la pagina anterior a la actual de la lista de pokemones
export const anteriorPokemonAccion = () => async (dispatch, getState) => {
    try { 
        const {offset, limit} = getState().pokemones;
        const anterior = offset - limit;

        if(anterior >= 0){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${anterior}&limit=${limit}`);
            dispatch({
                type: LISTAR_POKEMONES_EXITO,
                payload: {...res.data, offset: anterior}
            });
        }
        
    } catch(error){
        console.log(error);
    }
}

export const ultimoPokemonAccion = () => async (dispatch, getState) => {
    try { 
        const {count, limit} = getState().pokemones;
        const ultimo = (Math.ceil(count / limit) - 1) * limit;

        if(ultimo >= 0){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${ultimo}&limit=${limit}`);
            dispatch({
                type: LISTAR_POKEMONES_EXITO,
                payload: {...res.data, offset: ultimo}
            });
        }
        
    } catch(error){
        console.log(error);
    }
}
