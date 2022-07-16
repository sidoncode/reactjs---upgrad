import React, {useState, useEffect} from 'react';

function HookCounterOne(){
    // initial value of the counter will be always zero
    // usestate -> useEffect Hooks
    const [count, setcount] = useState(0)
    
    useEffect( () =>{
        document.title = `you clicked ${count} times`
    })

    return (
        <div>
            <button onClick={ () => setcount(count + 1)}>Click {count}</button>
        </div>
    )
}

export default HookCounterOne;