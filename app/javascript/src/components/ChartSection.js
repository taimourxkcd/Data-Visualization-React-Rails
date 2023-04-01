import React, { Component } from "react";
import Chart from "react-apexcharts";

export class ChartSection extends Component {
  render() {
    // create an empty array to store the data
    var attrib_conversions = [];
    var revenue = [];

    // check if attrib_conversions prop exists and add it to the array
    if (this.props.attrib_conversions != null) {
      attrib_conversions.push(this.props.attrib_conversions);
    }

    

    console.log(attrib_conversions);
    return (
      <div>
        {this.props.attrib_conversions != null && (
          <p>{this.props.attrib_conversions}</p>
        )}

        {this.props.conversions != null && <p>{this.props.conversions}</p>}
      </div>
    );
  }
}

export default ChartSection;
