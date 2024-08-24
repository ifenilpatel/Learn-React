import React from "react";

function Event() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  const handleClick1 = (data) => () => {
    console.log(data);
  };

  const handleClick2 = (data) => {
    console.log(data);
  };

  const handleClick3 = (event) => {
    console.log("Event type:", event.type);
    console.log("Target element:", event.target);
    console.log("Event object:", event);
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
      <hr />
      <div>
        <button onClick={handleClick1("Hello World!")}>Click Me with data</button>
      </div>
      <hr />
      <div>
        <button onClick={() => handleClick2("Hello World!")}>Click Me with data 1</button>
      </div>
      <hr />
      <div>
        <button onClick={(e) => handleClick3(e)}>Click Me with data 2</button>
      </div>
    </>
  );
}

export default Event;
