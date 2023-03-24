import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  nascimento = "1995-01-02";
  urlimagem = "/assets/xbox.jpg";
  mostraDataNascimento () {
    alert(`A data de nascimento de ${this.nome} é ${this.nascimento}`)
  }
}
