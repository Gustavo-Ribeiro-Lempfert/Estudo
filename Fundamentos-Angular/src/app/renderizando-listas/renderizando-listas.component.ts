import { Component } from '@angular/core';
import { Celular } from '../type/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1,nome: "nokia",descricao: "celular nokia",esgotado: true},
    {id: 2,nome: "iphone 13",descricao: "celular iphone",esgotado: false},
    {id: 3,nome: "samsung a22",descricao: "celular samsung",esgotado: false},
    {id: 4,nome: "motorola g4",descricao: "celular motorola",esgotado: true}

  ]
}
