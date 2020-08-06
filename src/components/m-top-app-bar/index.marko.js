// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onMount: function() {
          this.topAppBar = new mdc.topAppBar.MDCTopAppBar(this.getEl());
        },
        onInput: function(input) {
          console.log(input);
        }
      },
    marko_componentType = "/materialmarko$0.0.1/src/components/m-top-app-bar/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    marko_forOf = require("marko/src/runtime/helpers/for-of");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<header class=mdc-top-app-bar><div class=mdc-top-app-bar__row><section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\"><button class=\"material-icons mdc-top-app-bar__navigation-icon mdc-icon-button\" aria-label=\"Open navigation menu\">" +
    marko_escapeXml(input.menuicon || "menu") +
    "</button><span class=mdc-top-app-bar__title>");

  marko_dynamicTag(out, input.title.renderBody, null, null, null, null, __component, "5");

  marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, "6");

  out.w("</span></section><section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-end\" role=toolbar>");

  var $for$0 = 0;

  marko_forOf(input.actions, function(action) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<button class=\"material-icons mdc-top-app-bar__action-item mdc-icon-button\">" +
      marko_escapeXml(action.icon) +
      "</button>");
  });

  out.w("</section></div></header>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/materialmarko$0.0.1/src/components/m-top-app-bar/index.marko",
    component: "./"
  };
