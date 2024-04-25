import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  pageChange$ = new Subject<void>();
  users$!: Observable<User[]>;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.users$ = this.pageChange$.pipe(
      startWith(0),
      switchMap(() => this.apiService.getUsers())
    );
  }

  handlePageChange(_page: PageEvent) {
    // Used API is not smart, cannot pass there page params etc.
    // This will just mock page change behavior
    this.pageChange$.next();
  }
}
