import { Routes } from '@angular/router';
import { register } from 'node:module';
import { Login } from './core/auth/login/login';
import { Register } from './core/auth/register/register';
import { ForgetPassword } from './core/auth/forget-password/forget-password';
import { CheckEmail } from './core/auth/check-email/check-email';
import { ResetPassword } from './core/auth/reset-password/reset-password';
import { ResetSuccess } from './core/auth/reset-success/reset-success';

export const routes: Routes = [
    {path:`` ,component:Register},
    {path:`login` , component:Login},
    {path:`forget-password` , component:ForgetPassword},
    {path:`check-email` , component:CheckEmail},
    {path:`reset-password` , component:ResetPassword},
    {path:`reset-success` , component:ResetSuccess},
 ];
