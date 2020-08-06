// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          this.state = {
              type: null
            };
        },
        onInput: function(input) {
          if (input.type) {
            this.state.type = input.type;
          }

          if (input.contained || input.unelevated) {
            this.state.type = "unelevated";
          }

          if (input.raised) {
            this.state.type = "raised";
          }

          if (input.outlined || input.outline) {
            this.state.type = "outlined";
          }
        },
        onMount: function() {
          this.ripple = new mdc.ripple.MDCRipple(this.getEl("button"));
        }
      },
    marko_componentType = "/materialmarko$0.0.1/src/components/m-button/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    helpers_escape_quotes = require("marko/src/runtime/html/helpers/escape-quotes"),
    marko_escapeDoubleQuoteAttrValue = helpers_escape_quotes.d,
    marko_attr = require("marko/src/runtime/html/helpers/attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=mdc-touch-target-wrapper><button class=\"mdc-button marko-mdc-button mdc-button--" +
    marko_escapeDoubleQuoteAttrValue(state.type) +
    "\"" +
    marko_attr("disabled", input.disabled) +
    "><div class=mdc-button__ripple></div>");

  var tagName = input.icon ? "i" : false;

  if (tagName) {
    out.w("<" +
      tagName +
      " class=\"material-icons mdc-button__icon\" aria-hidden=true>");
  } else {
    out.bf("f_2", component, 1);
  }

  out.w(marko_escapeXml(input.icon));

  if (tagName) {
    out.w("</" +
      tagName +
      ">");
  } else {
    out.ef();
  }

  out.w("<span class=mdc-button__label>");

  marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, "4");

  out.w("</span>");

  var tagName2 = input.trailingicon ? "i" : false;

  if (tagName2) {
    out.w("<" +
      tagName2 +
      " class=\"material-icons mdc-button__icon\" aria-hidden=true>");
  } else {
    out.bf("f_5", component, 1);
  }

  out.w(marko_escapeXml(input.trailingicon));

  if (tagName2) {
    out.w("</" +
      tagName2 +
      ">");
  } else {
    out.ef();
  }

  out.w("</button></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/materialmarko$0.0.1/src/components/m-button/index.marko",
    component: "./"
  };
