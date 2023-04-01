import React, { Component } from "react";
import { ReactDOM } from "react-dom/client";
import CardSection from "./src/components/CardSection";
import ChartSection from "./src/components/ChartSection";
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
  optimised_target = "/optimisation_target/conversions";

  fetchData = async () => {
    let data = await fetch("/api/v1/csv/source/" + this.state.Id);
    let JsonData = await data.json();
    this.setState({ Id: this.state.Id, Data: JsonData });
  };

  handleSubmit = async (event) => {
    console.log(event.target.value);
    await this.setState({ Id: event.target.value, Data: this.state.Data });
    this.fetchData();
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { Data } = this.state;

    // console.log(this.state.Data);
    // console.log(this.state.Data.optimisation_target);
    // this.state.Data.forEach((item) => {
    //   console.log(item.optimisation_target);
    // });

    return (
      <>
        {/* <h1>this is taimour</h1>
        <Csv /> */}

        <Header
          handle_submit={this.handleSubmit}
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

            <div className="row">
              <div className="col-md-6">
                {this.state.Data && this.state.Data.length > 0 ? (
                  this.state.Data.map((item, index) => (
                    <ChartSection
                      key={index}
                      attrib_conversions={item.attributed_revenue}
                    />
                  ))
                ) : (
                  <p>No data found.</p>
                )}
              </div>
              <div className="col-md-6">
                {this.state.Data && this.state.Data.length > 0 ? (
                  this.state.Data.filter(
                    (item) => item.optimisation_target === "conversions"
                  ).map((item, index) => (
                    <ChartSection
                      key={index}
                      conversions={item.attributed_conversions}
                    />
                  ))
                ) : (
                  <p>No data found.</p>
                )}
              </div>
            </div>  
          </div>
        </div>
      </>
    );
  }
}
