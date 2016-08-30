import { Injectable }             from '@angular/core';
import { Router }                 from '@angular/router';

//hacemos que el servicio sea inyectable.
@Injectable()
export class PhotosService {
    //creamos un array con objetos para tener las imágenes ordenadas y poder añadir o quitar segun
    //nos convenga, ya que las invocamos en bucle y actua independientemente de las que haya.
    //A cada imagen, le definimos en nombre, la ruta y los términos de busqueda para la playlist.
    public images = [
        { name: "Classical", url: '../img/classical.jpg', searchTerms: 'classical+guitar+music'},
        { name: "Dance", url: '../img/dance.jpg', searchTerms: 'dance+relaxing+music'},
        { name: "Jazz", url: '../img/jazz.jpg', searchTerms: 'jazz+music'},
        { name: "Relaxing", url: '../img/relaxing.jpg', searchTerms: 'relaxing+music'},
        { name: "Poprock", url: '../img/rock-pop.jpg', searchTerms: 'pop+rock+music'},    
    ]
}