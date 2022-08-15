import React, {useState, useEffect} from "react";
import ToDoListButton from './buttonsCheckBox';
import ButtonOnClick from "./buttonOnClick";
import InputList from "./inputList";
import InputButtonClick from "./inputButtonClick";
import {Link} from "react-router-dom"

function App() {

    const [toDoList, setToDoList] = useState([]);
    const [taskError, setTaskError] = useState('');
    const [taskProcessingTrue, setTaskProcessingTrue] = useState(false);
    const [taskProcessingFalse, setTaskProcessingFalse] = useState(false);




    useEffect(()=>{
        const effect = toDoList.find(i => i.state === true);
        const eff = toDoList.find(items =>{
          if(items.state === false) {
              return true
          }
        })


        if (effect) {
            setTaskProcessingTrue(true);
        }
        else {
            setTaskProcessingTrue(false);
        }

        if (eff) {
            setTaskProcessingFalse(true);
        }
        else {
            setTaskProcessingFalse(false);
        }
    },[toDoList])

 useEffect(()=>{
     const parseJson = JSON.parse(localStorage.getItem('person'));
    if (parseJson !== null){setToDoList(parseJson)}

 }, []);

    function searchInputChange(text) {
        const newTodoList = toDoList.reduce((acc,currentValue)=>{
            if(text === ''){
                acc.push({...currentValue, visible: true})
            }
            else {
                if(currentValue.text.includes(text)){
                     acc.push({...currentValue, visible: false})
             }
                 else {
                    acc.push({...currentValue, visible: true})
             }
            }
            return acc;
        },[])

        setToDoList(newTodoList);
    }

    function buttonXOnClick(id) {


        return () => {
         const index = toDoList.filter((el)=>{
           if (el.id !== id) {
           return true}
         })
            setToDoList(index);
            localStorage.clear();
      }
}

    function buttonCheckBox(id) {
        return () => {

            const buttonMap = toDoList.map((buttonValue)=>{
                if (buttonValue.id === id) {
                    const newButtonValue = {...buttonValue}
                    newButtonValue.state = !newButtonValue.state
                    return newButtonValue
                }else{
                   return buttonValue
                }
            })

            console.log(buttonMap)
            setToDoList(buttonMap)
        }
    }

    function cancelTheTask(id) {
        return () => {
            const cancelThe = toDoList.map((currentValue) => {
              if(currentValue.id === id) {
                  currentValue.state = false;
                return currentValue;
              }else{
                  return currentValue

              }
            })

            setToDoList(cancelThe)
        }
    }


    function deleteOnClick() {
        setToDoList([]);
        localStorage.clear();
    }

    function solveAllProblems() {
        const solveAll = toDoList.map((currentValue)=>{
            currentValue.state = true;
            return currentValue;
        })
        setToDoList(solveAll)
    }

   function removeTheTask() {
        const cancelTheT = toDoList.map((currentValue)=>{
            currentValue.state = false;
           return currentValue
        });
         setToDoList(cancelTheT)
    }


    function buttonOnClick(text) {
        const arrButtonOnClick = [...toDoList];
        arrButtonOnClick.push({text: text, id: Math.random(), state:false, visible: true})
        setToDoList(arrButtonOnClick);
        localStorage.setItem('person', JSON.stringify(arrButtonOnClick))
    }



  return (
    <div className="App">
        <div><Link to="/test">Список задач</Link> </div>
        <h1>Todo List</h1>
        <div className="wrapperForButtons">
          <div className="test">  <InputList
                setTaskError={setTaskError}
                buttonOnClick={buttonOnClick}
            />
            {toDoList.length > 0 && (
                <div className="wrapperButtonOnClick">
                    <InputButtonClick
                        changeFunction={searchInputChange}
                    />
                    <ButtonOnClick deleteOnClick={deleteOnClick}
                                   solveAllProblems={solveAllProblems}
                                   removeTheTask={removeTheTask}
                                   taskProcessingFalse={taskProcessingFalse}
                                   taskProcessingTrue={taskProcessingTrue}
                    />
                </div>
            )}
          </div>
            {taskError && (
                <div>{taskError}</div>
            )}
            <ToDoListButton list={toDoList}
                            buttonCheckBox={buttonCheckBox}
                            buttonXOnClick={buttonXOnClick}
                            cancelTheTask={cancelTheTask}
            />
        </div>


    </div>
  );
}

export default App;
