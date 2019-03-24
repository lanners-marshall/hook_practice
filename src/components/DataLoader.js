import React from "react";
import useFetch from "./useFetch";
export default function DataLoader(props) {
  const data = useFetch("http://api.icndb.com/jokes/random");

  return (
    <div>
      <p>
        {data}
      </p>
    </div>
  );
}