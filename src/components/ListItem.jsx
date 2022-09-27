import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeTask,
  updateOn,
  updateOff,
  setUpdateId,
  unsetUpdateId,
  updateTask,
} from "../actions/actions";

function ListItem({ id, name, date, completed, setInput }) {
  const [checkBox, setCheckBox] = useState(completed);
  const dispatch = useDispatch();
  const update = useSelector((state) => state.update);
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

  return (
    <li className="listitem">
      <div className="taskname">
        {checkBox ? (
          <span>
            {" "}
            <strike>
              {" "}
              <Link to={`/task/${name}`} state={id}>
                {" "}
                {name}{" "}
              </Link>{" "}
            </strike>{" "}
          </span>
        ) : (
          <span>
            {" "}
            <Link to={`/task/${name}`} state={id}>
              {" "}
              {name}{" "}
            </Link>{" "}
          </span>
        )}
      </div>

      <div className="options">
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            setCheckBox(e.target.checked);
            const payload = {
              newValue: { completed: e.target.checked },
              id: id,
            };
            dispatch(updateTask(payload));
          }}
        />
        <button
          className={`${update} && 'nohover'`}
          onClick={setInputBoxForUpdate}
          disabled={id === updateId}
        >
          {" "}
          Update{" "}
        </button>
        <button
          onClick={() => {
            deleteTask();
            resetInputBox();
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
      <div className="date">
        <span>{date}</span>
      </div>
    </li>
  );
}

export default ListItem;
