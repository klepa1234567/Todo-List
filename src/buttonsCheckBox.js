import React from "react";


const ToDoListButton = ({list, buttonCheckBox, cancelTheTask, buttonXOnClick}) => {
    const buttonCheckbox = list.reduce((acc, currentValue)=>{
        acc.push(
            <div key={currentValue.id} className={currentValue.visible === true ? "listItem" : "listItem listItem2" }>{currentValue.text}
                {currentValue.state === false ? (
                    <input type="checkbox" className="selectButton" onClick={buttonCheckBox(currentValue.id)}/>
                ) : (
                    <input type="checkbox" checked="checked" className="check2" onClick={cancelTheTask(currentValue.id)}/>
                )}
                <button className="buttonX" onClick={buttonXOnClick(currentValue.id)}>x</button>
            </div>
        );
        return acc;
    },[]);

    return buttonCheckbox
}

export default ToDoListButton;
