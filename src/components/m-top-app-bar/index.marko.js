// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/materialmarko$0.0.1/src/components/m-top-app-bar/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=\"mdc-top-app-bar mdc-top-app-bar--short\"><div class=mdc-top-app-bar__row><section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\"><button class=\"material-icons mdc-top-app-bar__navigation-icon mdc-icon-button\" aria-label=\"Open navigation menu\">menu</button><span class=mdc-top-app-bar__title>Page title</span></section><section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-end\" role=toolbar><button class=\"material-icons mdc-top-app-bar__action-item mdc-icon-button\" aria-label=Favorite>favorite</button><button class=\"material-icons mdc-top-app-bar__action-item mdc-icon-button\" aria-label=Search>search</button><button class=\"material-icons mdc-top-app-bar__action-item mdc-icon-button\" aria-label=Options>more_vert</button></section></div></header>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/materialmarko$0.0.1/src/components/m-top-app-bar/index.marko"
  };
