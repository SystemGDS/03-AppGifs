import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'search-lazy-image',
  templateUrl: './lazy-image.component.html',

})
export class LazyImageComponent implements OnInit  {
  @Input()
  public url!: string;
  @Input()
  public alt: string ="";

  public hasLoading: boolean = false;

  ngOnInit(): void {
    if ( !this.url ) throw new Error('Url property is required')
  }

  onLoad(){
    setTimeout(() => {
      this.hasLoading = true;

    }, 1000);
  }
}
