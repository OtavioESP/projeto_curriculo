import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurriculoFormComponent } from "./curriculo-form/curriculo-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurriculoFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-curriculo';
}