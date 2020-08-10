// Compiled using marko@4.22.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/materialmarko$0.0.1/src/pages/index/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    lasso_head_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/head-tag")),
    m_top_app_bar_template = require("../../components/m-top-app-bar"),
    m_top_app_bar_tag = marko_loadTag(m_top_app_bar_template),
    m_button_template = require("../../components/m-button"),
    m_button_tag = marko_loadTag(m_button_template),
    marko_styleAttr = require("marko/src/runtime/html/helpers/style-attr"),
    m_card_template = require("../../components/m-card"),
    m_card_tag = marko_loadTag(m_card_template),
    m_layout_grid_template = require("../../components/m-layout-grid"),
    m_layout_grid_tag = marko_loadTag(m_layout_grid_template),
    browser_refresh_tag = marko_loadTag(require("browser-refresh-taglib/refresh-tag")),
    lasso_body_tag = marko_loadTag(require("@lasso/marko-taglib/taglib/body-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype><html><head><meta name=viewport content=\"width=device-width, initial-scale=1\"><link href=https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css rel=stylesheet><script src=https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js></script><link rel=stylesheet href=https://fonts.googleapis.com/icon?family=Material+Icons><title>Material Marko</title>");

  lasso_head_tag({}, out, __component, "6");

  lasso_head_tag({}, out, __component, "7");

  out.w("</head><body>");

  m_top_app_bar_tag({
      dense: true,
      title: {
          renderBody: function(out) {
            out.w("Material Marko");
          }
        },
      actions: [
          {
              icon: "favorite"
            },
          {
              icon: "bookmark"
            }
        ]
    }, out, __component, "9");

  out.w("<div" +
    marko_styleAttr({
      width: "100%",
      marginTop: "60px",
      display: "flex",
      placeContent: "space-evenly",
      flexWrap: "wrap"
    }) +
    " class=buttons-example>");

  m_button_tag({
      renderBody: function(out) {
        out.w("Click Me");
      }
    }, out, __component, "14");

  m_button_tag({
      outlined: true,
      renderBody: function(out) {
        out.w("Outlined Button");
      }
    }, out, __component, "15");

  m_button_tag({
      contained: true,
      trailingicon: "bookmark",
      renderBody: function(out) {
        out.w("Contained Button");
      }
    }, out, __component, "16");

  m_button_tag({
      raised: true,
      icon: "favorite",
      renderBody: function(out) {
        out.w("Raised Button");
      }
    }, out, __component, "17");

  m_button_tag({
      raised: true,
      disabled: true,
      renderBody: function(out) {
        out.w("Disabled");
      }
    }, out, __component, "18");

  out.w("</div>");

  m_layout_grid_tag({
      cells: [
          {
              renderBody: function(out) {
                m_card_tag({
                    mediacontent: {
                        img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                      },
                    actions: [
                        {
                            renderBody: function(out) {
                              out.w("Option 1");
                            }
                          },
                        {
                            renderBody: function(out) {
                              out.w("Option 2");
                            }
                          }
                      ],
                    renderBody: function(out) {
                      out.w("This is a card.");
                    }
                  }, out, __component, "21");
              }
            },
          {
              renderBody: function(out) {
                m_card_tag({
                    outlined: true,
                    primaryaction: {
                        renderBody: function(out) {
                          out.w("This is part of the primary action.");
                        }
                      },
                    mediacontent: {
                        img: "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
                        renderBody: function(out) {
                          out.w("<h2>Media Content</h2>");
                        }
                      },
                    actions: [
                        {
                            renderBody: function(out) {
                              out.w("Click Me");
                            }
                          },
                        {
                            renderBody: function(out) {
                              out.w("Learn More");
                            }
                          },
                        {
                            renderBody: function(out) {
                              out.w("Help!");
                            }
                          }
                      ]
                  }, out, __component, "26");
              }
            },
          {
              renderBody: function(out) {
                m_card_tag({
                    renderBody: function(out) {
                      out.w("<h2>Hot Air Balloons</h2><div>Learn More about how we float.</div>");
                    }
                  }, out, __component, "34");
              }
            }
        ]
    }, out, __component, "19");

  browser_refresh_tag({
      enabled: "true"
    }, out, __component, "37");

  lasso_body_tag({}, out, __component, "38");

  lasso_body_tag({}, out, __component, "39");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "40");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    deps: [
      {
          type: "css",
          code: "body {\r\n\t\tmargin: 0px;\r\n\t\tpadding: 0px;\r\n\t}\r\n\t.mdc-top-app-bar {\r\n\t\ttop:0px;\r\n\t}",
          virtualPath: "./index.marko.css",
          path: "./index.marko"
        }
    ],
    id: "/materialmarko$0.0.1/src/pages/index/index.marko",
    tags: [
      "@lasso/marko-taglib/taglib/head-tag",
      "../../components/m-top-app-bar",
      "../../components/m-button",
      "../../components/m-card",
      "../../components/m-layout-grid",
      "browser-refresh-taglib/refresh-tag",
      "@lasso/marko-taglib/taglib/body-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
