import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule
  ],
  declarations: [TruncatePipe],
  exports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    TruncatePipe
  ]
})
export class SharedModule { }
