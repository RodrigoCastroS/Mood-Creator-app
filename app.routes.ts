import { provideRouter, RouterConfig }     from '@angular/router';

import { PhotosComponent }                 from './components/photos.component';
import { LoginComponent }                  from './components/login.component';
import { PlaylistComponent }               from './components/playlist.component';

//definimos las rutas para el routing, incluída la del parámetro (playlist/:playlistId)
const routes: RouterConfig = [
    {path:'photos',  component:PhotosComponent},
    {path:'', component:LoginComponent},
    {path:'playlist/:playlistId', component:PlaylistComponent}
];
//exportamos las rutas para poder usarlas en toda la aplicación.
export const appRouterProviders = [
    provideRouter(routes)
];