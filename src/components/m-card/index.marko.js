// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/materialmarko$0.0.1/src/components/m-card/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    marko_styleAttr = require("marko/src/runtime/html/helpers/style-attr"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_classAttr = require("marko/src/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div" +
    marko_classAttr([
      "mdc-card",
      input.outlined ? "mdc-card--outlined" : ""
    ]) +
    "><div class=mdc-card__primary-action tabindex=0><div class=\"mdc-card__media mdc-card__media--square\"" +
    marko_styleAttr({
      backgroundImage: input.img ? ("url(\"" + input.img) + "\")" : false
    }) +
    "><div class=mdc-card__media-content" +
    marko_styleAttr({
      padding: "16px"
    }) +
    ">");

  if (input.mediacontent) {
    marko_dynamicTag(out, input.mediacontent.renderBody, null, null, null, null, __component, "4");
  }

  out.w("</div></div>");

  if (input.primaryaction) {
    out.w("<div" +
      marko_styleAttr({
        padding: "16px"
      }) +
      " class=primary-action-content>");

    marko_dynamicTag(out, input.primaryaction.renderBody, null, null, null, null, __component, "6");

    out.w("</div>");
  }

  out.w("</div><div" +
    marko_styleAttr({
      padding: "16px"
    }) +
    " class=card-content>");

  if (input.renderBody) {
    marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, "8");
  }

  out.w("</div><div class=mdc-card__actions>");

  var $for$0 = 0;

  marko_forOf(input.actions, function(action) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<button class=\"mdc-button mdc-card__action mdc-card__action--button\"" +
      marko_attr("title", action.title) +
      "><div class=mdc-button__ripple></div><span class=mdc-button__label>");

    marko_dynamicTag(out, action.renderBody, null, null, null, null, __component, "13" + $keyScope$0);

    out.w("</span></button>");
  });

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/materialmarko$0.0.1/src/components/m-card/index.marko"
  };
