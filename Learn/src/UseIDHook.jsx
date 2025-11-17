import React, { useId } from "react";

export default function UseIDHook() {
  const name = useId();
  const email = useId();
  console.log(name, email);

  return (
    <div>
      {/* <label id={`${name}-lable`}>First name</label>
      <input type="text" id={`${name}-input`} /> */}
      <label id={name}>name</label>
      <input type="text" id={name} />
      <input type="text" id={email} />
    </div>
  );
}
