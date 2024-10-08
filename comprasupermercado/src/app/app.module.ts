import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa o FormsModule
import { AppComponent } from './app.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component'; // Importa o componente da lista de compras

@NgModule({
  declarations: [
    AppComponent,
    ListaComprasComponent // Declara o componente da lista de compras
  ],
  imports: [
    BrowserModule,
    FormsModule // Adiciona o FormsModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
