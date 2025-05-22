import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CurriculoService } from '../services/curriculo.service';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curriculo-form',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './curriculo-form.component.html',
  styleUrls: ['./curriculo-form.component.css']
})
export class CurriculoFormComponent {
  constructor(private router: Router, private curriculoService: CurriculoService) { }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.curriculoService.adicionarCurriculo(form.value);
      this.router.navigate(['/curriculos']);
    }
  }
}