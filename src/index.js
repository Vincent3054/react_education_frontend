import React from "react";
import ReactDOM from "react-dom";
import router from "./router";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(router, document.getElementById("root"));
serviceWorker.unregister();
