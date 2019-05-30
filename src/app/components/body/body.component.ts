
import{ Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent{
  text = "body";
  mostrar = true;

  frase : any = {
    autor : 'Ben Parker',
    mensagem : 'chunk {main} main.js, main.js.map (main) 18.5 kB [initial] [rendered]'
  }

  lista : string[] = ['op01', 'op02', 'op03'];

}
