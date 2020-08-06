// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/materialmarko$0.0.1/src/components/m-layout-grid/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    marko_dynamicTag = require("marko/src/runtime/helpers/dynamic-tag"),
    marko_classAttr = require("marko/src/runtime/html/helpers/class-attr");

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=mdc-layout-grid><div class=mdc-layout-grid__inner>");

  var $for$0 = 0;

  marko_forOf(input.cells, function(cell) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<div" +
      marko_classAttr([
        "mdc-layout-grid__cell",
        cell.span ? "mdc-layout-grid__cell--span-" + cell.span : input.span ? "mdc-layout-grid__cell--span-" + input.span : false
      ]) +
      ">");

    marko_dynamicTag(out, cell.renderBody, null, null, null, null, __component, "3" + $keyScope$0);

    out.w("</div>");
  });

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/materialmarko$0.0.1/src/components/m-layout-grid/index.marko"
  };
