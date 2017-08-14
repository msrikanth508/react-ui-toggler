[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://travis-ci.org/msrikanth508/react-ui-toggler.svg?branch=master)](https://travis-ci.org/msrikanth508/react-ui-toggler)
[![Coverage Status](https://coveralls.io/repos/github/msrikanth508/react-ui-toggler/badge.svg)](https://coveralls.io/github/msrikanth508/react-ui-toggler)

A simple and effective react toggle component.

![webp net-gifmaker 2](https://user-images.githubusercontent.com/8520311/29267011-7f468140-8104-11e7-8ed8-06e5e582578f.gif)

## Props

The component takes the following props.

| Prop              | Type       | Default | Description |
|-------------------|------------|---------|-------------|
| disabled		    | _boolean_  | `fasle`   | If `true`, the toggler is disabled. If `false`, the toggler is enabled. |
| isActive          | _boolean_  | `false`   | If `true`, the toggler is checked. If `false`, the toggler is unchecked. |
| offLabel		    | _string_  |    | You can pass any string to be shown when toggler is off. |
| onChange		    | _function_ |    | Callback function to invoke when the user clicks on the toggler. The function signature should be the following:  `const func = (e, isActive) => { }`. Function returns event and toggler status whether it's active or not.  |
| onLabel		    | _string_  |    | You can pass any string to be shown when toggler is on. |

## Installation

```bash
npm install react-ui-toggler
```

## Usage

Include the component's CSS with

```javascript
import "react-ui-toggler/dist/react-ui-toggler.css" // for ES6 modules
// or
require("react-ui-toggler/dist/react-ui-toggler.css") // for CommonJS
```

## Development

```javascript
npm install
npm start
```

## Test

```javascript
npm test
```

## Build

```javascript
npm run build
```

## License

MIT
