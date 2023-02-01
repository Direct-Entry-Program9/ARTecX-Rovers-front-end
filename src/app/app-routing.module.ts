import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {GameComponent} from "./game/game.component";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'app',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'game'
      },
      {
        path: 'game',
        component: GameComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'login'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
