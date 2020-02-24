import { Component } from '@angular/core';
import { textareaAutoResize } from "materialize-css";
import { Nota } from 'models/note.model';

declare let $: any;
declare const M;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  Notas: Nota[] = [
  ]

  ngOnInit(){
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });
  }

  agrNota(title:HTMLInputElement, content:HTMLInputElement){
    if(title.value==="" || content.value===""){
        alert("Uno de los cuadros de texto esta vacío")
      }
    else{
      const temp:Nota ={
        titulo: title.value,
        contenido: content.value
      }
      this.Notas.unshift(temp)
      title.value=""
      content.value=""
      M.textareaAutoResize($('#TA1'));
      M.textareaAutoResize($('#TA2'));
    }
  }
}
