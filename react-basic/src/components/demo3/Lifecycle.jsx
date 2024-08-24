import React, { useState, useEffect } from "react";

function Lifecycle() {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    console.log("Changed!");
    console.log(data);
  }, [data]);

  const updateDate = () => {
    setData("Fenil Patel");
  };

  return (
    <>
      <button type="button" onClick={updateDate}>
        Update value
      </button>
    </>
  );
}

export default Lifecycle;
