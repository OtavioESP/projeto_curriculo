import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { CurriculoFormComponent } from './curriculo-form/curriculo-form.component';
import { CurriculoListComponent } from './curriculo-list/curriculo-list.component';

export const routes: Routes = [
    { path: 'formulario', component: CurriculoFormComponent },
    { path: 'curriculos', component: CurriculoListComponent }
];

export const appRouterProviders = [provideRouter(routes)];