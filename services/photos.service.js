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
//hacemos que el servicio sea inyectable.
var PhotosService = (function () {
    function PhotosService() {
        //creamos un array con objetos para tener las imágenes ordenadas y poder añadir o quitar segun
        //nos convenga, ya que las invocamos en bucle y actua independientemente de las que haya.
        //A cada imagen, le definimos en nombre, la ruta y los términos de busqueda para la playlist.
        this.images = [
            { name: "Classical", url: '../img/classical.jpg', searchTerms: 'classical+guitar+music' },
            { name: "Dance", url: '../img/dance.jpg', searchTerms: 'dance+relaxing+music' },
            { name: "Jazz", url: '../img/jazz.jpg', searchTerms: 'jazz+music' },
            { name: "Relaxing", url: '../img/relaxing.jpg', searchTerms: 'relaxing+music' },
            { name: "Poprock", url: '../img/rock-pop.jpg', searchTerms: 'pop+rock+music' },
        ];
    }
    PhotosService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PhotosService);
    return PhotosService;
}());
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map