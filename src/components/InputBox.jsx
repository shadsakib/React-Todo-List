import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";

import { addTask, updateTask } from "../store/taskSlice";
import { updateOff } from "../store/updateSlice";
import { unsetUpdateId } from "../store/updateIdSlice";

function InputBox(props) {
  const { input, onChange, resetInput } = props;

  const tasks = useSelector((state) => state.tasks);
  const update = useSelector((state) => state.update);
  const updateId = useSelector((state) => state.updateId);

  const dispatch = useDispatch();

  const handleAddTask = function () {
    if (input) {
      // setList((prevList) => [...prevList, input]);
      const task = { name: input, completed: false, date: getFormattedDate() };

      dispatch(addTask(task));

      resetInput();
      console.log(tasks);
    }
  };

  const handleUpdateTask = function () {
    if (input) {
      // setList((prevList) => {
      //   const index = prevList.findIndex((_, id) => id === updateId);
      //   const newList = [...prevList];
      //   newList[index] = input;
      //   return newList;
      // });
      const updatedTask = {
        name: input,
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

  const handleEnterKeyPress = function (e) {
    if (e.key === "Enter") {
      update ? handleUpdateTask() : handleAddTask();
    }
  };

  return (
    <div className="box">
      {/* <div> Add task </div> */}
      <TextField
        className="textfield"
        value={input}
        id="addItem"
        label="Task"
        variant="outlined"
        onChange={onChange}
        onKeyDown={handleEnterKeyPress}
        InputProps={{ style: { background: "white" } }}
        size="small"
      />
      <div>
        {update ? (
          <Button
            variant="contained"
            startIcon={<UpdateIcon />}
            onClick={handleUpdateTask}
          >
            {" "}
            Update{" "}
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleAddTask}
          >
            {" "}
            Add{" "}
          </Button>
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
