import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements AfterViewInit {
  @Input() set users(value: User[]) {
    this.dataSource = new MatTableDataSource(value);
  }
  @ViewChild(MatSort) sort!: MatSort;

  @Output() pageChange = new EventEmitter<PageEvent>();

  displayedColumns: string[] = ['name', 'email', 'city'];
  dataSource!: MatTableDataSource<User>;

  constructor(private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  filter = (event: any) => {
    this.dataSource.filter = event.target.value;
  };

  handleRowClick(selectedUser: User) {
    const ref = this.dialog.open(EditUserModalComponent, {
      data: {
        user: selectedUser,
      },
    });

    ref
      .afterClosed()
      .pipe(filter((result) => !!result))
      .subscribe((updatedUser) => {
        this.dataSource.data = this.dataSource.data.map((u) =>
          u.id === updatedUser.id ? updatedUser : u
        );
      });
  }
}
