import React from "react";


const ButtonOnClick = ({
    deleteOnClick,
    solveAllProblems,
    removeTheTask,
    taskProcessingFalse,
    taskProcessingTrue
}) => {
    return (
        <div className="wrapperButtonDelete">
            <button className="buttonDelete" onClick={deleteOnClick}>Delete</button>
            {taskProcessingFalse === true && (<button className="check" onClick={solveAllProblems}>V</button>)}
            {taskProcessingTrue === true && (<button className="cancel" onClick={removeTheTask}>Cancel</button>)}

        </div>
    );
};

export default ButtonOnClick;