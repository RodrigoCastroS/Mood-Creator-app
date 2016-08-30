"use strict";
var router_1 = require('@angular/router');
var photos_component_1 = require('./components/photos.component');
var login_component_1 = require('./components/login.component');
var playlist_component_1 = require('./components/playlist.component');
//definimos las rutas para el routing, incluída la del parámetro (playlist/:playlistId)
var routes = [
    { path: 'photos', component: photos_component_1.PhotosComponent },
    { path: '', component: login_component_1.LoginComponent },
    { path: 'playlist/:playlistId', component: playlist_component_1.PlaylistComponent }
];
//exportamos las rutas para poder usarlas en toda la aplicación.
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map