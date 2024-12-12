import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '@modules/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {
  @Input() showToggle = true;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();
}
