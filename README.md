
# zDesign

zStyle is a CSS design system with both light and dark themes. This is the style guide I use in all of my web projects. This is the design system I use in all of my web projects as of its creation (11/2/2021).

## Installation

Drag the `zdesign` folder into your root directory.
Copy these lines into the `<head>` tag in your HTML file:

```html

<link href="/zdesign/mainStyle.css" rel="stylesheet" type="text/css"  />

<link href="/zdesign/darkTheme.css" rel="stylesheet">

<link href="/zdesign/lightTheme.css" rel="stylesheet" id="theme">

<script src="/zdesign/themeSelector.js"></script>

```

## How to Use

To Make a theme switcher, you can use the `changeTheme()` function.
