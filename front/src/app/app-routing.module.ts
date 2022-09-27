import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SubPageComponent } from './components/sub-page/sub-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'sub', component: SubPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
