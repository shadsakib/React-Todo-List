import React from "react";

function InputBox(props) {
  const { list, setList, input, setInput, update, setUpdate, updateId } = props;

  return (
    <div className="box">
      <div> Add task </div>
      <input
        value={input}
        id="addItem"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
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
                setInput("");
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
                setInput("");
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
