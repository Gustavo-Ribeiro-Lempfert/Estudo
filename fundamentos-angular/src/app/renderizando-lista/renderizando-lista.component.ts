import { Component } from '@angular/core';
import { celular } from '../types/celulares';

@Component({
  selector: 'app-renderizando-lista',
  templateUrl: './renderizando-lista.component.html',
  styleUrls: ['./renderizando-lista.component.css']
})
export class RenderizandoListaComponent {
  celulares: celular[] = [
    {id: 1,nome: "samsung a22", descricao: "Celular samsung", esgotado: false},
    {id: 2,nome: "Xiaomi redmi 11", descricao: "Celular Xiaomi redmi 11", esgotado: true},
    {id: 3,nome: "iphone 12", descricao: "Celular iphone 12", esgotado: false}
  ]
}
