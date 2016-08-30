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
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
var PlaylistService = (function () {
    function PlaylistService(http) {
        this.http = http;
    }
    PlaylistService.prototype.getPlaylist = function (searchTerms) {
        //aplicamos los términos de búsqueda obtenidos desde el componentes en la URL de la API de youtube
        var youtubeUrl = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + searchTerms + "&type=playlist&key=AIzaSyDIUmTjzCg9JMACLi14BAZWpGpKInt1qGo";
        //generamos un numero aleatorio para buscar una de las 10 playlist que ha encontrado la url
        var random = Math.floor(Math.random() * 10);
        //obtenemos el objeto Json que nos da la Url y conseguimos la ID de una de las playlist 
        //relacionada con los términos de búsqueda de la imagen que hemos clicado.
        return this.http.get(youtubeUrl)
            .map(function (res) { return res.json().items[random].id.playlistId; });
    };
    PlaylistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlaylistService);
    return PlaylistService;
}());
exports.PlaylistService = PlaylistService;
//# sourceMappingURL=playlist.service.js.map