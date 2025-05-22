// src/app/services/curriculo.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CurriculoService {
    private curriculos: any[] = [];

    adicionarCurriculo(curriculo: any) {
        this.curriculos.push(curriculo);
    }

    listarCurriculos() {
        return this.curriculos;
    }
}
