import { Injectable }                 from '@angular/core';
import { Http }                       from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'

@Injectable()
export class PlaylistService{
//definimos en tipo de youtubeUrl a string.
    private youtubeUrl:string;  
        constructor(private http: Http){ }
    getPlaylist(searchTerms:string){
            //aplicamos los términos de búsqueda obtenidos desde el componentes en la URL de la API de youtube
            let youtubeUrl=`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerms}&type=playlist&key=AIzaSyDIUmTjzCg9JMACLi14BAZWpGpKInt1qGo`;
            //generamos un numero aleatorio para buscar una de las 10 playlist que ha encontrado la url
            let random: number = Math.floor(Math.random ()*10);
            //obtenemos el objeto Json que nos da la Url y conseguimos la ID de una de las playlist 
            //relacionada con los términos de búsqueda de la imagen que hemos clicado.
            return this.http.get(youtubeUrl)
               .map(res => res.json().items[random].id.playlistId);
        }
}