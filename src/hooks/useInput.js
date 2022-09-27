import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const resetInput = function () {
    setValue("");
  };

  return [value, setValue, handleChange, resetInput];
}

export default useInput;
