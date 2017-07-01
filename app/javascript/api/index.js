export let styles = {
  item: {
    padding: "2px 6px",
    cursor: "default"
  },

  highlightedItem: {
    color: "white",
    background: "hsl(200, 50%, 50%)",
    padding: "2px 6px",
    cursor: "default"
  },

  menu: {
    border: "solid 1px #ccc"
  }
};

export function matchStateToTerm(state, value) {
  return (
    state.label.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
    state.value.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export function sortStates(a, b, value) {
  const aLower = a.label.toLowerCase();
  const bLower = b.label.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
}

export function fakeRequest(value, cb) {
  setTimeout(
    cb,
    500,
    value
      ? getStates().filter(state => matchStateToTerm(state, value))
      : getStates()
  );
}

export function getStates() {
  console.log(fetchAmadeusAutoCompleteAPI("a"));
  // return fetchAmadeusAutoCompleteAPI("a");

  // return [
  //   { value: "AL", label: "Alabama" },
  //   { value: "AK", label: "Alaska" },
  //   { value: "AZ", label: "Arizona" },
  //   { value: "AR", label: "Arkansas" },
  //   { value: "CA", label: "California" },
  //   { value: "CO", label: "Colorado" },
  //   { value: "CT", label: "Connecticut" },
  //   { value: "DE", label: "Delaware" },
  //   { value: "FL", label: "Florida" },
  //   { value: "GA", label: "Georgia" },
  //   { value: "HI", label: "Hawaii" },
  //   { value: "ID", label: "Idaho" },
  //   { value: "IL", label: "Illinois" },
  //   { value: "IN", label: "Indiana" },
  //   { value: "IA", label: "Iowa" },
  //   { value: "KS", label: "Kansas" },
  //   { value: "KY", label: "Kentucky" },
  //   { value: "LA", label: "Louisiana" },
  //   { value: "ME", label: "Maine" },
  //   { value: "MD", label: "Maryland" },
  //   { value: "MA", label: "Massachusetts" },
  //   { value: "MI", label: "Michigan" },
  //   { value: "MN", label: "Minnesota" },
  //   { value: "MS", label: "Mississippi" },
  //   { value: "MO", label: "Missouri" },
  //   { value: "MT", label: "Montana" },
  //   { value: "NE", label: "Nebraska" },
  //   { value: "NV", label: "Nevada" },
  //   { value: "NH", label: "New Hampshire" },
  //   { value: "NJ", label: "New Jersey" },
  //   { value: "NM", label: "New Mexico" },
  //   { value: "NY", label: "New York" },
  //   { value: "NC", label: "North Carolina" },
  //   { value: "ND", label: "North Dakota" },
  //   { value: "OH", label: "Ohio" },
  //   { value: "OK", label: "Oklahoma" },
  //   { value: "OR", label: "Oregon" },
  //   { value: "PA", label: "Pennsylvania" },
  //   { value: "RI", label: "Rhode Island" },
  //   { value: "SC", label: "South Carolina" },
  //   { value: "SD", label: "South Dakota" },
  //   { value: "TN", label: "Tennessee" },
  //   { value: "TX", label: "Texas" },
  //   { value: "UT", label: "Utah" },
  //   { value: "VT", label: "Vermont" },
  //   { value: "VA", label: "Virginia" },
  //   { value: "WA", label: "Washington" },
  //   { value: "WV", label: "West Virginia" },
  //   { value: "WI", label: "Wisconsin" },
  //   { value: "WY", label: "Wyoming" }
  // ];
}

export function getAutoComplete() {
  return [{ label: "xx", value: "yy" }];
}

export function fetchAmadeusAutoCompleteAPI(msg) {
  let token = "bUe60BHjxhdts81QJRHmOCT2lyszowVT";
  return fetch(
    `https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=${token}&term=${msg}`
  )
    .then(response => response.json())
    .then(function(parsedData) {
      console.log(parsedData);
    });
}
