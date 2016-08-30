import { Component }                     from '@angular/core';
import { HTTP_PROVIDERS }                from '@angular/http';
import { Router }                        from '@angular/router';

import { PhotosService }                 from '../services/photos.service';
import { PlaylistService }               from '../services/playlist.service';
import { AuthenticationService }         from '../services/authentication.service';



@Component({
    selector: 'photos',
    templateUrl:'app/templates/photos.component.html' ,
    styleUrls: ['app/styles/photos.component.css'],
    providers:[PhotosService, PlaylistService, HTTP_PROVIDERS]
})
export class PhotosComponent {
  images: any[];
  playlistId: string;
    constructor(private photoservice: PhotosService,
                private _router:Router,
                private playlistservice: PlaylistService,
                private _service:AuthenticationService){
    //Comprobamos si el usuario está logeado. Si no lo está, vuelve a la pantalla de Login.      
                    this._service.checkCredentials();
    //importamos el array the Photoservice para usarlo en el bucle del template.
                    this.images = this.photoservice.images;
                }
     getPlaylist(searchTerms:string){
    //nos suscribimos a getplaylist del servicio para obtener la Id de la playlist, que es un observable.
         this.playlistservice.getPlaylist(searchTerms).subscribe((data:string) => {
         this.playlistId = data;
    //usamos el routing con parámetros para ir a la playlist correspondiente a la ID obtenida.
         this._router.navigate(['playlist', this.playlistId]);
           });
        }
}