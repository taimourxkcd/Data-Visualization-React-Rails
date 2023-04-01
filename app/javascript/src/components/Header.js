import React, { Component } from "react";

export class Header extends Component {
  render(props) {
    return (
      <>
        <section className="header">
          <div className="container-xxl d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <select
                className="form-select form-select-lg me-3"
                aria-label=".form-select-lg example"
                name="select source"
                onChange={this.props.handle_submit}
              >
                <option value="baseline">Baseline</option>
                <option value="direct">direct</option>
                <option value="radio">radio</option>
              </select>
            </div>
            <div>
              <h1 className="text-end">Company Name</h1>
            </div>
          </div>
        </section>
        <div className="sourceName">
          <h1>{this.props.sourceName}</h1>
        </div>
      </>
    );
  }
}

export default Header;
