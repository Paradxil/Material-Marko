# m-button
An implementation of the MDC web material button.

Additional resources:
- [Material Components Web - mdc-button]("https://github.com/material-components/material-components-web/tree/master/packages/mdc-button")
- [Material Design Button]("https://material.io/components/buttons")

## Quick Start
MarkoJS Tag: `m-button`

Attributes:
- unelevated
- raised
- outlined
- type
- disabled
- icon
- trailingicon
- text

Events:
- on-click

## Usage
### Button Type
Most attributes can simply be appended to the tag to change the look and feel of the button. A default button will appear as just text.

`outlined` for example will create a button with a simple outline while `raised` will create a raised button affect.

In addition the `type` attribute can be used to define the type dynamically. For example `type="outlined"` is the same as using the `outlined` attribute. Common available types are "unelevated", "raised", "outlined" or empty for a default text button. You can read more on the [Material Components Web GitHub page for MDC Buttons]("https://github.com/material-components/material-components-web/tree/master/packages/mdc-button").

### Content

The button has three predefined sections for content. The leading icon, text and trailing icon.

These can be defined using the respective tag attributes:
- `icon` - Appears before the text.
- `text` - Appears to the right of the icon.
- `trailingicon` - Appears after the text.

#### Text

You can add text using the `text` attribute. You can also add text and any arbitrary content to the tag body.

```marko
m-button icon="save" outlined
  m-body -- Save
```

#### Icons

Icons are [Material Icons]("https://material.io/resources/icons/?style=baseline") and are defined using strings.

For example `icon="settings"` would add a gear icon to the button.

## Examples
**Text Button**

![Default Button](/images/m-button/m-button-text.png)

`m-button -- Text Button`

**Raised Button**

![Raised Button](/images/m-button/m-button-raised.png)

`m-button raised icon="bookmark" -- Save Post`

**Contained Button**

![Contained Button](/images/m-button/m-button-contained.png)

`m-button contained trailingicon="menu" text="menu"`

**Outlined Button**

![Outlined Button](/images/m-button/m-button-outlined.png)

`m-button icon="shop" outlined -- Buy Now`
