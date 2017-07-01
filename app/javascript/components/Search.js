import React from "react";
import PropTypes from "prop-types";
import momentPropTypes from "react-moment-proptypes";
import moment from "moment";
import Autocomplete from "react-autocomplete";
import {
  getStates,
  styles,
  fakeRequest,
  fetchAmadeusAutoCompleteAPI,
  getAutoComplete
} from "../api";

import DateRangePickerWrapper from "./DateRangePickerWrapper";

import "react-dates/lib/css/_datepicker.css";

export default class Search extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <h1>Async Data</h1>
          <label htmlFor="states-autocomplete">
            Choose a state from the US
          </label>

          <form className="form-inline">
            <label className="sr-only" htmlFor="from">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2 mb-sm-0"
              id="from"
              placeholder="From: City or Airport"
            />

            <label className="sr-only" htmlFor="to">
              Username
            </label>
            <input
              type="text"
              className="form-control mb-2 mr-sm-2 mb-sm-0"
              id="to"
              placeholder="To: City or Airport"
            />

            <DateRangePickerWrapper />

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
