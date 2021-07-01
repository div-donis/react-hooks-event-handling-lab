import React from "react";

function Keypad(){
    function keypad(){
        console.log('Entering password...')
    }
    return <input onChange={keypad} type="password" />
    
}

export default Keypad