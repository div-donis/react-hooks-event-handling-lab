import React from "react";

function EyesOnMe(){
    function focusFunc(){
        console.log('Good!')
    };
    function blurFunc(){
        console.log('Hey! Eyes on me!')
    };
    return <button onFocus={focusFunc} onBlur={blurFunc}>Eyes on me</button>
}

export default EyesOnMe