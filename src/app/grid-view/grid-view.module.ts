import { RouterModule } from '@angular/router';
import { GridViewRoutingModule } from './grid-view-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridViewComponent } from './grid-view.component';
import { GridCardComponent } from './components/grid-card/grid-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GridViewComponent, GridCardComponent],
  imports: [CommonModule, RouterModule, SharedModule, GridViewRoutingModule],
})
export class GridViewModule {}
