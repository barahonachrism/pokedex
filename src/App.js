import React from 'react'
import {Provider} from 'react-redux';
import { Pokemones } from './components/Pokemones';
import generateStore from './redux/store';

export const App = () => {
    const store = generateStore();
    return (
        <div>
            <Provider store= {store}>
                <Pokemones limit={20}/>
            </Provider>
        </div>
    )
}

export default App;
