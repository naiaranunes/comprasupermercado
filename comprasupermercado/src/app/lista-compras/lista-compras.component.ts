import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  novoItem: string = '';  
  listaCompras: { nome: string; comprado: boolean }[] = [];  

  
  itemEditando: number | null = null;  
  itemEditado: string = '';  

  
  adicionarItem() {
    if (this.novoItem.trim()) {
      this.listaCompras.push({ nome: this.novoItem, comprado: false });  
      this.novoItem = '';  
    }
  }

  
  editarItem(index: number, item: string) {
    this.itemEditando = index;
    this.itemEditado = item;
  }

  salvarEdicao(index: number) {
    if (this.itemEditado.trim()) {
      this.listaCompras[index].nome = this.itemEditado;
      this.cancelarEdicao();
    }
  }


  cancelarEdicao() {
    this.itemEditando = null;
    this.itemEditado = '';
  }

 
  marcarComoComprado(index: number) {
    this.listaCompras[index].comprado = !this.listaCompras[index].comprado;  
  }

  
  removerItem(index: number) {
    this.listaCompras.splice(index, 1);  
  }
}
