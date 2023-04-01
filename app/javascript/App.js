import React, { Component } from "react";
import { ReactDOM } from "react-dom/client";
import CardSection from "./src/components/CardSection";
import Header from "./src/components/Header";
import Csv from "./src/Csv";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      Id: "baseline",
      Data: [],
    };
  }

  source = "/source/baseline";

  fetchData = async () => {
    let data = await fetch("/api/v1/csv/source/" + this.state.Id);
    let JsonData = await data.json();
    this.setState({ Id: this.state.Id, Data: JsonData });
  };

  handleSubmit = async(event)=>{
    console.log(event.target.value)
    await this.setState({Id: event.target.value, Data: this.state.Data})
    this.fetchData()
  }


  componentDidMount() {
    this.fetchData();
  }



  render() {
    const { Data } = this.state;

    return (
      <>
        {/* <h1>this is taimour</h1>
        <Csv /> */}

        <Header handle_submit = {this.handleSubmit}
          sourceName={
            this.state.Data && this.state.Data.length > 0
              ? this.state.Data[0].source
              : null
          }
        />

        <div className="container-xxl">
          <div className="row flex-row justify-content-center">
            <div className="col-md-6 col-lg-4 mb-3">
              <CardSection
                name="Total Attribute Conversions"
                attribute={
                  this.state.Data && this.state.Data.length > 0
                    ? this.state.Data[0].attributed_conversions
                    : null
                }
              />
            </div>
            <div className="col-md-6 col-lg-4 mb-3">
              <CardSection
                name="Total Attribute Revenues"
                attribute={
                  this.state.Data && this.state.Data.length > 0
                    ? this.state.Data[0].attributed_revenue
                    : null
                }
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
