import { Routes } from '@angular/router';
import { TarotOneCardComponent } from './core/components/tarot-one-card/tarot-one-card.component';
export const routes: Routes = [
  { path: 'tarot', component: TarotOneCardComponent },
  { path: '', redirectTo: '/tarot', pathMatch: 'full' },
];
