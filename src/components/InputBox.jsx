import React from "react";

function InputBox(props) {
  const {
    list,
    setList,
    input,
    onChange,
    resetInput,
    update,
    setUpdate,
    updateId,
  } = props;

  return (
    <div className="box">
      <div> Add task </div>
      <input value={input} id="addItem" type="text" onChange={onChange} />
      <div>
        {update ? (
          <button
            onClick={() => {
              if (input) {
                const index = list.findIndex((element, id) => id === updateId);
                const newList = [...list];
                newList[index] = input;
                setList(newList);
                setUpdate(false);
                resetInput();
                alert("Updated!");
              }
            }}
          >
            {" "}
            Update{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              if (input) {
                setList([...list, input]);
                resetInput();
              }
            }}
          >
            {" "}
            Add{" "}
          </button>
        )}
      </div>
    </div>
  );
}

export default InputBox;
