import { Component } from '@angular/core';
import { MaterialModule } from '@modules/material.module';

@Component({
  selector: 'app-starter',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './starter.component.html',
  styleUrl: './starter.component.scss',
})
export class StarterComponent {}
