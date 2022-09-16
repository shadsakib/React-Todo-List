import React, { useState } from "react";

function ListItem({
  id,
  name,
  list,
  setList,
  setInput,
  update,
  setUpdate,
  updateId,
  setUpdateId,
}) {
  const [checkBox, setCheckBox] = useState(false);
  const [date, setDate] = useState();

  return (
    <li className="listitem">
      <div className="taskname">
        {checkBox ? (
          <span>
            {" "}
            <strike> {name} </strike>{" "}
          </span>
        ) : (
          <span> {name}</span>
        )}
      </div>

      <div className="options">
        <input
          className="checkbox"
          type="checkbox"
          onChange={(e) => setCheckBox(e.target.checked)}
        />
        <button
          className={`${update} && 'nohover'`}
          onClick={() => {
            setInput(name);
            setUpdate(true);
            setUpdateId(id);
          }}
          disabled={update}
        >
          {" "}
          Update{" "}
        </button>
        <button
          onClick={() => {
            const newList = Array.from(list).filter((item, i) => i !== id);
            console.log(newList);
            setList(newList);
            if (updateId === id) {
              setUpdate(false);
              setInput("");
            }
          }}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
      <div className="date">
        <span>
          {" "}
          {date
            ? date
            : (() => {
                const currDate = getFormattedDate();
                setDate(currDate);
                return currDate;
              })()}{" "}
        </span>
      </div>
    </li>
  );

  function getFormattedDate() {
    const today = new Date();
    const time = today.toLocaleString("en-BD").substring(11, 19);

    const day = today.toLocaleString("default", { day: "2-digit" });
    const month = today.toLocaleString("default", { month: "short" });
    const year = today.toLocaleString("default", { year: "numeric" });
    return day + "-" + month + "-" + year + ", " + time;
  }
}

export default ListItem;
