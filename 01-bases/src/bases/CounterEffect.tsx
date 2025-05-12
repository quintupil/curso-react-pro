import { useEffect, useState } from 'react';

const MAXIMUM_COUNT = 10;
export const CounterEffect = () => {
    
    const [counter, setCounter] = useState(5);
    
    const handleClick = () => {
        setCounter( (prev) => Math.min(prev + 1, MAXIMUM_COUNT));
    }
    
    useEffect(() => {
        // Este codigo se ejecuta cada vez que cambia el counter
        //console.log('Counter changed: ', counter);
        if ( counter < 10 ) return;
        console.log('%cSe llego al valor máximo','color: red; background-color: black;');

    }, [counter]); // Only when counter changes

    return (
        <>
            <h1>Counter: { counter }</h1>
            <button onClick={ handleClick }>
                +1
            </button>
       
        </>
    );
}