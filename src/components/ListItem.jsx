import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeTask, updateTask } from "../store/taskSlice";
import { updateOn, updateOff } from "../store/updateSlice";
import { setUpdateId, unsetUpdateId } from "../store/updateIdSlice";

function ListItem({ id, name, date, completed, setInput }) {
  const [checkBox, setCheckBox] = useState(completed);
  const dispatch = useDispatch();
  const updateId = useSelector((state) => state.updateId);

  const setInputBoxForUpdate = function () {
    setInput(name);
    dispatch(updateOn());
    dispatch(setUpdateId(id));
  };

  const deleteTask = function () {
    dispatch(removeTask({ id: id }));
  };

  const resetInputBox = function () {
    if (updateId === id) {
      dispatch(updateOff());
      setInput("");
      dispatch(unsetUpdateId());
    }
  };

  const handleCheckboxChange = function (e) {
    setCheckBox(e.target.checked);

    const payload = {
      newValue: { completed: e.target.checked },
      id: id,
    };
    dispatch(updateTask(payload));
  };

  return (
    <li className="listitem">
      {/* <div>
        <span className="serial"> {id} </span>
      </div> */}

      <div className="taskname">
        <span>
          <Link to={`/task/${name}`} state={id}>
            {" "}
            <span className={checkBox ? "colorfade" : ""}> {name} </span>{" "}
          </Link>{" "}
        </span>
      </div>

      <div className="options">
        <Checkbox
          checked={completed}
          color={completed ? "success" : "error"}
          onChange={handleCheckboxChange}
        />
        <IconButton
          size="small"
          onClick={setInputBoxForUpdate}
          disabled={id === updateId}
          color="default"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            deleteTask();
            resetInputBox();
          }}
          color="default"
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="date">
        <span>{date}</span>
      </div>
    </li>
  );
}

export default ListItem;
