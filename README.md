# Material-Marko
Material components for MarkoJS

## What is this?
This is an implemenation of MDC web components for MarkoJS. This makes it much easier to create material webapps.

## Usage
For the purposes of this tutorial I assume that you already have a working MarkoJS environment.

The easiest way to install Material-Marko is using npm. 

`npm i material-marko`

MarkoJS will automatically locate the material components. 

All material components start with `m-` making them easy to identify. Documentation for each component is in the works. 

## Sample Webpage / Development
To run the sample webpage clone this repo and run `npm start`.

To help with development clone this repo and run `npm run dev` to use [browser refresh](https://github.com/patrick-steele-idem/browser-refresh). This makes it easy to view changes in the browser as you make them.

Navigate to `http://localhost:8080/` in your browser to view the sample website.

## Available Material Components
The following components are available in some form. While they are all usable not all of them are feature complete.
- m-button
- m-card
- m-drawer
- m-layout-grid
- m-switch
- m-textfield
- m-top-app-bar

In addition the follow typography elements have been implemented:
- m-body
- m-button-typography
- m-caption
- m-h1
- m-h2
- m-h3
- m-h4
- m-h5
- m-h6
- m-overline
- m-require
- m-subtitle

## Examples:
You can use each component like you would any other tag in MarkoJS. Here are a few examples:

**m-button**

![Raised Button](https://github.com/Paradxil/Material-Marko/blob/master/images/m-button/m-button-raised.png)

`m-button raised icon="bookmark" -- Save Post`

## Roadmap
Moving forward I plan to implement all MDC web components as found here: [Material Components Web](https://github.com/material-components/material-components-web/tree/master/packages)

I also want to add easy theming for material components and a few helper components to make designing webpages easier.

## Contact Me
Feel free to submit an issue on GitHub.
