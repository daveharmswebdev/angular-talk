import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromisesComponent } from './promises/promises.component';
import { HomeComponent } from './home/home.component';
import { EvtsObsComponent } from './evts-obs/evts-obs.component';
import { SideEffectsComponent } from './side-effects/side-effects.component';
import { PicsumComponent } from './picsum/picsum.component';
import { NestedComponent } from './nested/nested.component';
import { BaconComponent } from './bacon/bacon.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'events', component: EvtsObsComponent},
  { path: 'picsum', component: PicsumComponent},
  { path: 'bacon', component: BaconComponent},
  { path: 'side-effects', component: SideEffectsComponent},
  { path: 'nested', component: NestedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
