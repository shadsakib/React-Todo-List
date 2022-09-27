import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTask,
  updateTask,
  updateOff,
  unsetUpdateId,
} from "../actions/actions";

function InputBox(props) {
  const { input, onChange, resetInput } = props;

  const tasks = useSelector((state) => state.tasks);
  const update = useSelector((state) => state.update);
  const updateId = useSelector((state) => state.updateId);

  const dispatch = useDispatch();

  const addTask1 = function () {
    if (input) {
      // setList((prevList) => [...prevList, input]);
      const task = { name: input, completed: false, date: getFormattedDate() };

      dispatch(addTask(task));

      resetInput();
      console.log(tasks);
    }
  };

  const updateTask1 = function () {
    if (input) {
      // setList((prevList) => {
      //   const index = prevList.findIndex((_, id) => id === updateId);
      //   const newList = [...prevList];
      //   newList[index] = input;
      //   return newList;
      // });
      const updatedTask = {
        name: input,
        completed: tasks[updateId].completed,
        date: getFormattedDate(),
      };

      const payload = { newValue: updatedTask, id: updateId };
      dispatch(updateTask(payload));
      dispatch(unsetUpdateId());
      dispatch(updateOff());
      resetInput();
      alert("Updated!");
    }
  };

  return (
    <div className="box">
      <div> Add task </div>
      <input value={input} id="addItem" type="text" onChange={onChange} />
      <div>
        {update ? (
          <button onClick={updateTask1}> Update </button>
        ) : (
          <button onClick={addTask1}> Add </button>
        )}
      </div>
    </div>
  );
}

function getFormattedDate() {
  const today = new Date();
  const time = today.toLocaleString("en-BD").substring(11, 19);

  const day = today.toLocaleString("default", { day: "2-digit" });
  const month = today.toLocaleString("default", { month: "short" });
  const year = today.toLocaleString("default", { year: "numeric" });
  return day + "-" + month + "-" + year + ", " + time;
}

export default InputBox;
