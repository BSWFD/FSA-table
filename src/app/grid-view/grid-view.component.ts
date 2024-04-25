import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent {
  // Static data - not specified in AC, if it should be dynamic or not
  gridElementList: GridElement[] = [
    {
      id: '1',
      name: 'First element',
    },
    {
      id: '2',
      name: 'Second element',
    },
    {
      id: '3',
      name: 'Third element',
    },
    {
      id: '4',
      name: 'Fourth element',
    },
    {
      id: '5',
      name: 'Fifth element',
    },
    {
      id: '6',
      name: 'Sixth element',
    },
  ];
}
