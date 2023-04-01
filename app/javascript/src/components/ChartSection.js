import React, { Component } from "react";
import Chart from "react-apexcharts";

export class ChartSection extends Component {
  render() {
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
