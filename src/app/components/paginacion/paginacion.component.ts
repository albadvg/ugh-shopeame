import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginacion',
  standalone: true,
  imports: [],
  templateUrl: './paginacion.component.html',
  styleUrl: './paginacion.component.scss'
})
export class PaginacionComponent {
  @Input() pageNum!:number;
  @Output() pageEvent = new EventEmitter<number>()

  changePage(page:number) {
    this.pageEvent.emit(page);
  }
}
