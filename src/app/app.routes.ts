import { Routes } from '@angular/router';
import { PublicComponent } from './pages/public/public.component';

export const routes: Routes = [

    {
        path:'',
        component:PublicComponent,
        children: [{
            path: '',
            loadChildren: () => import ('./pages/public/public-auth.routes').then((m)=> m.routes),
        }],
    }

];
