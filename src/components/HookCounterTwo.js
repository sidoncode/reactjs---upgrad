import React, {useState} from 'react';

function HookCounterTwo(){
    // initial value of the counter will be always zero
    // 
    const initialval = 0
    const [count, setcount] = useState(initialval)

    const incrementbyten = () =>{
        for( let i = 0;i<10;i++){
            setcount(count + 1)
        }
    }

    return (
        <div>

        Count: {count}

        <button onClick={() => setcount(initialval)}> Reset Button</button>
        
        <button onClick={() => setcount(count + 1)}> Increment Button</button>

        <button onClick={() => setcount(count - 1)}> Decrement Button</button>
        <button onClick={incrementbyten}> Increment by 10</button>
        </div>
    )
}

export default HookCounterTwo;