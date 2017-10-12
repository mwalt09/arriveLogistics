import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers";
import CarrierCity from "./containers/search_bar";
import SelectedCarrier from "./containers/carrier_details.js";


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/carrierDetails/:Id" component={SelectedCarrier} />
          <Route path="/" component={CarrierCity} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);