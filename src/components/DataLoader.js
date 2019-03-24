import React, { useState, useEffect } from "react";
export default function useDataLoader() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://api.icndb.com/jokes/random")
      .then(response => response.json())
      .then(data => {
        setData(data.value.joke)
      });
  }, []);
  return (
    <div>
      <div>
        {data}
      </div>
    </div>
  );
}
