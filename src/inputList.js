import React, {useState} from "react";


const InputList = ({ buttonOnClick, setTaskError }) => {
    const [text, setText] = useState('');

    const inputOnChange = (e) => {
        setText(e.target.value);
        setTaskError(null);
    };

    const addNewTask = () => {
        if(text === ''){
            return setTaskError('Ошибка: заполните поле!')
        }

        buttonOnClick(text);
        setText('');
    };
    const inputListDelete = () =>{
            setText('')
    }

   return (
    <div className="wrapperInputList">
        <div className="new">
            <textarea value={text} className="inputList" onChange={inputOnChange}></textarea>
            { text !== "" && <button className="inputListDelete" onClick={inputListDelete}>x</button>}
        </div>
       <button className="buttonAdd" onClick={addNewTask}>+</button>
    </div>
)
};

export default InputList;