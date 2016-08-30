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
var platform_browser_1 = require('@angular/platform-browser');
var authentication_service_1 = require('../services/authentication.service');
var PlaylistComponent = (function () {
    function PlaylistComponent(_router, route, sanitizer, _service) {
        this._router = _router;
        this.route = route;
        this.sanitizer = sanitizer;
        this._service = _service;
        //la URL sin safe resource da problemas de seguridad, así que lo implementamos para que funcione bien.
        this.youtubeUrl = "https://www.youtube.com/embed/?listType=playlist&list=";
        //Comprobamos si el usuario está logeado. Si no lo está, vuelve a la pantalla de Login.      
        this._service.checkCredentials();
    }
    PlaylistComponent.prototype.ngOnInit = function () {
        var _this = this;
        //recuperamos la PlaylistId obtenida a través del parámetro y la añadimos a la url de la playlist
        this.sub = this.route.params.subscribe(function (params) {
            var playlistId = params['playlistId'];
            //aseguramos la url de youtube para que no de problemas de seguridad.
            _this.youtubeUrl = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.youtubeUrl + playlistId);
        });
    };
    //volvemos a la página de las fotos por si queremos elegir otra playlist. El return false previene 
    //la recarga de la página.
    PlaylistComponent.prototype.goPhotos = function () {
        this._router.navigate(['photos']);
        return false;
    };
    PlaylistComponent = __decorate([
        core_1.Component({
            selector: 'playlist',
            templateUrl: 'app/templates/playlist.component.html',
            styleUrls: ['app/styles/playlist.component.css'],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, platform_browser_1.DomSanitizationService, authentication_service_1.AuthenticationService])
    ], PlaylistComponent);
    return PlaylistComponent;
}());
exports.PlaylistComponent = PlaylistComponent;
//# sourceMappingURL=playlist.component.js.map