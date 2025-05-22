// src/app/curriculo-list/curriculo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CurriculoService } from '../services/curriculo.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-curriculo-list',
    templateUrl: './curriculo-list.component.html',
    standalone: true,
    imports: [CommonModule],
})
export class CurriculoListComponent implements OnInit {
    curriculos: any[] = [];

    constructor(private curriculoService: CurriculoService) { }

    ngOnInit(): void {
        this.curriculos = this.curriculoService.listarCurriculos();
    }
}
