import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro.page').then( m => m.CadastroPage)
  },
  {
    path: 'recuperarsenha',
    loadComponent: () => import('./recuperarsenha/recuperarsenha.page').then( m => m.RecuperarsenhaPage)
  },
  {
    path: 'armazenamento',
    loadComponent: () => import('./armazenamento/armazenamento.page').then( m => m.ArmazenamentoPage)
  },
  {
    path: 'api',
    loadComponent: () => import('./api/api.page').then( m => m.ApiPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
];
