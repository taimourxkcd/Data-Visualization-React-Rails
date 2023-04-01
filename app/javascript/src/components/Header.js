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
                <option value="display_prospecting">display_prospecting</option>
                <option value="google_performance">google_performance</option>
                <option value="affiliate_prospecting">
                  affiliate_prospecting
                </option>
                <option value="organicsocial">organicsocial</option>
                <option value="tv">tv</option>
                <option value="paidsearch_brand">paidsearch_brand</option>
                <option value="paidsearch_generic_prospecting">
                  paidsearch_generic_prospecting
                </option>
                <option value="paidsearch_dynamic_search_ads_prospecting">
                  paidsearch_dynamic_search_ads_prospecting
                </option>
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
