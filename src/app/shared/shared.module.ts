import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    SidebarComponent,
    LazyImageComponent
  ]

})
export class SharedModule { }
