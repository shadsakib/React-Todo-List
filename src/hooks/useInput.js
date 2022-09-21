import { useState } from "react";

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function resetInput() {
    setValue("");
  }

  return [value, setValue, handleChange, resetInput];
}

export default useInput;
