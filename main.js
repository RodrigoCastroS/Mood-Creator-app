"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./components/app.component');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.appRouterProviders])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map