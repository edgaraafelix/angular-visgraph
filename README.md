# angular-visgraph

AngularJS directive to draw [vis.js](http://visjs.org/) graph.

Copyright (C) 2013, edgaraafelix.

## Usage

Include both vis.js and angular.visgraph.js in your application.

```html
<script src="//visjs.org/dist/vis.js"></script>
<script src="angular.visgraph-0.0.1.js"></script>
```

Add the module `angular.visgraph` as a dependency to your app module:

```js
var app = angular.module('app.visgraph', ['angular.visgraph']);
```

You can now start using the vis-graph directive to draw a graph. For example:

```html
<div id="graph" vis-graph style="width: 100%; height: 600px"></div>
```

You can also pass vis.js graph data and options for example:

```html
<div id="graph" vis-graph data="graph.data" options="graph.options" event="select" callback="callbackFunction(params)" style="width: 100%; height: 600px"></div>
```

Possible configuration options are described in the [vis.js documentation](http://visjs.org/docs/).

## License

Released under the terms of MIT License.

