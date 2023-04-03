import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = 'joao';
  dataNascimento = '1995-02-01';
  URLimagem = "../../assets/xbox 360 1a.jpg"

  mostrarDataNascimento(){
    alert(`A data denascimento de ${this.nome} é ${this.dataNascimento}`)
  }

}

