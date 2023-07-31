import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadsComponent } from './components/heads/heads.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeadsComponent,
  ],
  exports:[
    FooterComponent,
    HeadsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
