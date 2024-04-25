import { TableViewRoutingModule } from './table-view-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableViewComponent } from './table-view.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SharedModule } from '../shared/shared.module';
import { EditUserModalComponent } from './components/edit-user-modal/edit-user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableViewComponent,
    UsersTableComponent,
    EditUserModalComponent,
  ],
  imports: [
    CommonModule,
    TableViewRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class TableViewModule {}
