"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var photos_service_1 = require('../services/photos.service');
var playlist_service_1 = require('../services/playlist.service');
var authentication_service_1 = require('../services/authentication.service');
var PhotosComponent = (function () {
    function PhotosComponent(photoservice, _router, playlistservice, _service) {
        this.photoservice = photoservice;
        this._router = _router;
        this.playlistservice = playlistservice;
        this._service = _service;
        //Comprobamos si el usuario está logeado. Si no lo está, vuelve a la pantalla de Login.      
        this._service.checkCredentials();
        //importamos el array the Photoservice para usarlo en el bucle del template.
        this.images = this.photoservice.images;
    }
    PhotosComponent.prototype.getPlaylist = function (searchTerms) {
        var _this = this;
        //nos suscribimos a getplaylist del servicio para obtener la Id de la playlist, que es un observable.
        this.playlistservice.getPlaylist(searchTerms).subscribe(function (data) {
            _this.playlistId = data;
            //usamos el routing con parámetros para ir a la playlist correspondiente a la ID obtenida.
            _this._router.navigate(['playlist', _this.playlistId]);
        });
    };
    PhotosComponent = __decorate([
        core_1.Component({
            selector: 'photos',
            templateUrl: 'app/templates/photos.component.html',
            styleUrls: ['app/styles/photos.component.css'],
            providers: [photos_service_1.PhotosService, playlist_service_1.PlaylistService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [photos_service_1.PhotosService, router_1.Router, playlist_service_1.PlaylistService, authentication_service_1.AuthenticationService])
    ], PhotosComponent);
    return PhotosComponent;
}());
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map