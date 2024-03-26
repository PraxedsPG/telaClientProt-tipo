import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    
}
