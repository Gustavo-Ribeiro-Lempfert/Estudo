import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { primeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';
import { MultiplicaPorPipePipe } from './multiplica-por.pipe.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListaComponent } from './renderizando-lista/renderizando-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    primeiroComponenteComponent,
    SegundoComponenteComponent,
    MultiplicaPorPipePipe,
    PipeCustomizadoComponent,
    TwoWayDataBindingComponent,
    RenderizandoListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
