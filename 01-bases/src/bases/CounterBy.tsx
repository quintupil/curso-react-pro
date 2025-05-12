import { useState } from 'react';

interface Props {
    initialValue?: number; //? means optional
}

interface CounterState {
    counter: number;
    clicks: number;
}

export const CounterBy = ({initialValue = 5} : Props) => {
    
    //const [counterState, setCounterState] = useState<CounterState>({
    //Refactoring 
    const [{counter, clicks}, setCounterState] = useState<CounterState>({
        counter: initialValue,
        clicks: 0
    });
    
    //const { counter, clicks } = counter;

    const handleClick = ( value: number ) => {
        /*setCounterState( (prev) => ({
            counter: prev.counter + value,
            clicks: prev.clicks + 1
        }));*/

        /** Refactoring */
        setCounterState( ({counter, clicks}) => ({
            counter: counter + value,
            clicks: clicks + 1
        }));

    }
    
    //const { counter, clicks } = counterState;

    return (
        <>
            <h1>Counter By: { counter }</h1>
            <h1>Clicks: { clicks }</h1>

            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    );
}