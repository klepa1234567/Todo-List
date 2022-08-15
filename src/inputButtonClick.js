import React, {useState} from "react";


const InputButtonClick = ({changeFunction}) =>{

    const [searchText, setInputButtonOnClick] = useState('')

    const clearInput =() => {
        setInputButtonOnClick('');
        changeFunction('')
    }
    const onChange = (e) =>{
        setInputButtonOnClick(e.target.value)
        changeFunction(e.target.value)
    }
    return (
       <div className="divInputButton">
        <input value={searchText} className="inputButtonOnClick"  onChange={onChange}/>
           {searchText.length !== 0 &&(<button className="inputButton" onClick={clearInput}>x</button>)}
       </div>
    )
};


export default InputButtonClick;