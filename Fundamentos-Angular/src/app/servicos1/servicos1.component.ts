import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servicos1',
  templateUrl: './servicos1.component.html',
  styleUrls: ['./servicos1.component.css']
})
export class Servicos1Component {
  nome = ""

  constructor(private logger: LoggerService){}

  adicionarNome() {
    this.logger.logar(`O nome ${this.nome} foi adicionado`)
  }
}
