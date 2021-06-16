import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inicioPokemonesAccion,siguientePokemonAccion,anteriorPokemonAccion,ultimoPokemonAccion } from '../redux/pokeDucks';

export const Pokemones = (props) => {
    const dispatch = useDispatch();
    const firstLimit =  parseInt(props.limit);
    const[limit, setLimit] = React.useState(firstLimit);
    const pokemones = useSelector(store => store.pokemones);
    const searchAgain =  (e) => {
        if(e.key === 'Enter'){
            dispatch(inicioPokemonesAccion(limit));
        }
    };

    const changeLimit = (e) => setLimit(parseInt(e.target.value));
    React.useEffect( () => dispatch(inicioPokemonesAccion(firstLimit)), [dispatch, firstLimit]);

    return (
        <div>
        <p>Existen {pokemones.count} en total, pokemones mostrados actualmente: {limit}</p>
        <div class="container">
            <div class="row">
            <div class="col">
                <button type="button" class="btn btn-primary" disabled={pokemones.offset===0} onClick={()=>dispatch(inicioPokemonesAccion(limit))}>{'|<<'}</button>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary" disabled={pokemones.offset===0} onClick={()=>dispatch(anteriorPokemonAccion(limit))}>{'|<'}</button>
            </div>
            <div class="col">
                <input type="number" name="limit" min="1" max="100" value={limit} 
                    onChange={(e)=>changeLimit(e)}
                    onKeyDown={(e)=>searchAgain(e)}></input>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary" disabled={ (pokemones.offset + limit) > pokemones.count} onClick={()=>dispatch(siguientePokemonAccion(limit))}>{'>'}</button>
            </div>
            <div class="col">
                <button type="button" class="btn btn-primary" disabled={ (pokemones.offset + limit) > pokemones.count} onClick={()=>dispatch(ultimoPokemonAccion(limit))}>{'>>|'}</button>
            </div>
            <div class="row">
            <div class="col">
                <ul>
                    {
                        pokemones.results.map((item,index)=>{
                            return <li key={item.name}>{pokemones.offset+index+1}.-{item.name}</li>;
                        })
                    }
                </ul>
            </div>
         </div>
            </div>
        </div>
        </div>
    )
}
