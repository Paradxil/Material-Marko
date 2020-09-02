// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/materialmarko$0.0.3/src/components/m-card/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    marko_styleAttr = require("marko/src/runtime/html/helpers/style-attr"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_classAttr = require("marko/src/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  function macro_media_content(out) {
    out.w("<div class=\"mdc-card__media mdc-card__media--square\"" +
      marko_styleAttr({
        backgroundImage: input.mediacontent.img ? ("url(\"" + input.mediacontent.img) + "\")" : false
      }) +
      "><div class=mdc-card__media-content" +
      marko_styleAttr({
        padding: "16px"
      }) +
      ">");

    marko_dynamicTag(out, input.mediacontent.renderBody, null, null, null, null, __component, "2");

    out.w("</div></div>");
  }

  out.w("<div" +
    marko_classAttr([
      "mdc-card",
      input.outlined ? "mdc-card--outlined" : "",
      input.class
    ]) +
    ">");

  if (input.primaryaction) {
    out.w("<div class=mdc-card__primary-action tabindex=0>");

    if (input.mediacontent) {
      marko_dynamicTag(out, macro_media_content, null, null, null, null, __component, "14");
    }

    out.w("<div" +
      marko_styleAttr({
        padding: "16px"
      }) +
      " class=primary-action-content>");

    marko_dynamicTag(out, input.primaryaction.renderBody, null, null, null, null, __component, "6");

    out.w("</div></div>");
  } else if (input.mediacontent) {
    marko_dynamicTag(out, macro_media_content, null, null, null, null, __component, "15");
  }

  if (input.renderBody) {
    out.w("<div" +
      marko_styleAttr({
        padding: "16px"
      }) +
      " class=card-content>");

    marko_dynamicTag(out, input.renderBody, null, null, null, null, __component, "8");

    out.w("</div>");
  }

  if (input.actions) {
    out.w("<div class=mdc-card__actions>");

    var $for$0 = 0;

    marko_forOf(input.actions, function(action) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<button class=\"mdc-button mdc-card__action mdc-card__action--button\"" +
        marko_attr("title", action.title) +
        "><div class=mdc-button__ripple></div><span class=mdc-button__label>");

      marko_dynamicTag(out, action.renderBody, null, null, null, null, __component, "13" + $keyScope$0);

      out.w("</span></button>");
    });

    out.w("</div>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/materialmarko$0.0.3/src/components/m-card/index.marko"
  };
