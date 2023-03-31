import React, { Component } from "react";
import { ReactDOM } from "react-dom/client";
import Csv from "./src/Csv";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Id: "bitcoin",
      Data: [],
    };
  }

  fetchData = async () => {
    let data = await fetch("/api/v1/csv");
    let JsonData = await data.json();
    this.setState({ Id: this.state.Id, Data: JsonData });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {

      const { Data } = this.state;
      
    return (
      <>
        {/* <h1>this is taimour</h1>
        <Csv /> */}
        {/* {JSON.stringify(this.state.Data)} */}

        {/* {this.state.Data.map((item) => (
          <div key={item.partition_id}>{item.date}</div>
        ))} */}

        {Data && Data.length > 0 && <div>{Data[0].date}</div>}

        {/* <p>Date: {this.state.Data.data.date}</p> */}
      </>
    );
  }
}
