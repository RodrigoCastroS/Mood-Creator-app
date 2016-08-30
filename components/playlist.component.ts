import { Component }                                 from '@angular/core';
import { HTTP_PROVIDERS }                            from '@angular/http';
import { Router, RouterConfig, ActivatedRoute }      from '@angular/router';
import { SafeResourceUrl, DomSanitizationService }   from '@angular/platform-browser';

import { AuthenticationService }                     from '../services/authentication.service';

@Component({
    selector: 'playlist',
    templateUrl:'app/templates/playlist.component.html' ,
    styleUrls: ['app/styles/playlist.component.css'],
    providers: [HTTP_PROVIDERS]
})
export class PlaylistComponent {
  private sub: any;
  //la URL sin safe resource da problemas de seguridad, así que lo implementamos para que funcione bien.
  private youtubeUrl:SafeResourceUrl = "https://www.youtube.com/embed/?listType=playlist&list=";
    constructor(private _router:Router,
                private route: ActivatedRoute,
                private sanitizer: DomSanitizationService,
                private _service:AuthenticationService){
                  //Comprobamos si el usuario está logeado. Si no lo está, vuelve a la pantalla de Login.      
                    this._service.checkCredentials();
                    }  
    ngOnInit() {
    //recuperamos la PlaylistId obtenida a través del parámetro y la añadimos a la url de la playlist
        this.sub = this.route.params.subscribe(params => {
        let playlistId = params['playlistId'];
    //aseguramos la url de youtube para que no de problemas de seguridad.
        this.youtubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl+playlistId); 
         });
    }
    //volvemos a la página de las fotos por si queremos elegir otra playlist. El return false previene 
    //la recarga de la página.
    goPhotos(){
        this._router.navigate(['photos']); 
        return false;
    }
}