import React, { useReducer } from "react";

export default function UsereducerForm() {
  const initialVAlue = {
    name: "",
    email: "",
    password: "",
  };

  function formreducer(state, action) {
    return {
      ...state,
      [action.field]: action.value,
    };
  }

  const [state, dispatch] = useReducer(formreducer, initialVAlue);

  function handleChange(e) {
    dispatch({
      field: e.target.name,
      value: e.target.value,
    });
  }
  return (
    <div>
      <h2>Register form</h2>

      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={state.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="name"
        placeholder="enter name"
        value={state.password}
        onChange={handleChange}
      />
    </div>
  );
}
