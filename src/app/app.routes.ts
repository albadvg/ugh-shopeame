import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { EdicionComponent } from './pages/edicion/edicion.component';

export const routes: Routes = [
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path: 'gestion',
        component: GestionComponent
    },
    {
        path: 'edicion',
        component: EdicionComponent
    }
];
