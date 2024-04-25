import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./grid-view/grid-view.module').then((m) => m.GridViewModule),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./details-view/details-view.module').then(
        (m) => m.DetailsViewModule
      ),
  },
  {
    path: 'table',
    loadChildren: () =>
      import('./table-view/table-view.module').then((m) => m.TableViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
