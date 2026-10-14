import { Routes } from '@angular/router';
import { register } from 'node:module';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';

export const routes: Routes = [
    {path:`` ,component:Register},
    {path:`login` , component:Login},
    {path:`forget-password` , component:ForgetPassword},
 ];
