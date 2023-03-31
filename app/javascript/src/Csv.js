import React, { useState, useEffect } from "react";
import axios from "axios";

const Csv = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/v1/csv")
      .then((response) => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.log("hello");
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <h1>this is the csvtable</h1>
      {items.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Source</th>
              <th>Attributed Conversions</th>
              <th>Attributed Revenue</th>
              <th>Type</th>
              <th>Spends</th>
              <th>Partition ID</th>
              <th>Optimisation Target</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.partition_id}>
                <td>{item.date}</td>
                <td>{item.source}</td>
                <td>{item.attributed_conversions}</td>
                <td>{item.attributed_revenue}</td>
                <td>{item.type}</td>
                <td>{item.spends}</td>
                <td>{item.partition_id}</td>
                <td>{item.optimisation_target}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Csv;
