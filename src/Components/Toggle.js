import React, { useState } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>TOGGLE EFFECT</h1>
      {toggle && <h1 id="toggle_text">This will be Toggled</h1>}
      <button
        data-testid="toggle_button"
        type="button"
        className="btn btn-default"
        onClick={() => {
          setToggle(!toggle);
          console.log("toggle", toggle);
        }}
      >
        {toggle ? "Hide" : "Show"}
      </button>

      {/* <div>
       { fetch('https://jsonplaceholder.typicode.com/todos/1') .then(response =>
        response.json()) .then(json => console.log(json))}
      </div> */}
    </div>
  );
}
