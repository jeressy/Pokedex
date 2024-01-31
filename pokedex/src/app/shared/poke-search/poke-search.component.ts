import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html',
  styleUrl: './poke-search.component.scss'
})
export class PokeSearchComponent implements OnInit{

  constructor() {}
  @Output() public emmitSearch: EventEmitter<string>= new EventEmitter();
  ngOnInit(): void {
    
  }

  public search(value: string){
    this.emmitSearch.emit(value);

  }
}
