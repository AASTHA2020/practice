import { useState } from "react";


function Counter(){

    let count =0;

    const[counter, setCounter ] = useState(0);

    // function handleIncrement(){
    //     setCounter(counter +1);
    // }
    // function handleDecrement(){
    //     setCounter(counter -1)
    // }
    function handleChange(flag){

        if(flag == "inc") setCounter(counter+1);
        else setCounter(counter-1);
    }
    return (
        <>
        <h1>Counter</h1>
        <div id="counter">
            <button onClick={() =>handleChange("inc")}>Increment</button>
            <p>{counter}</p>
            <button onClick={() =>handleChange("dec")}>Decrement</button>
         


        </div>

        </>
    );
}

export default Counter;


