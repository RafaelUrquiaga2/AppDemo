import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppDemo';
  name = 'Manuel';
  age = 36;
  img = 'http://as01.epimg.net/meristation/imagenes/2022/08/24/noticias/1661328674_157916_1661328877_noticia_normal.jpg';
  btnDisable = false;

  //Así se crea un objeto (person)
  person = {
    name: 'Victor',
    age: 30,
    foto: 'http://as01.epimg.net/meristation/imagenes/2022/08/24/noticias/1661328674_157916_1661328877_noticia_normal.jpg',
  }

  names:string[] = ['Manuel','Piera','Victor']
  newName = '';
  addName(){
    this.names.push(this.newName) ;
    this.newName = '';
  }
   
  deleteName(index:number){
    this.names.splice(index,1) ;
  }
   
  products: Product[] = [
    {
      name:"El mejor juguete",
      price: 328,
      image:'./assets/images/chardevice.png',
      category: 'Juguete'
    },
    {
      name:"El mejor carro",
      price: 328,
      image:'./assets/images/desktop.png'
    },
    {
      name:"El mejor soldado",
      price: 328,
      image:'./assets/images/ftp.png'
    },
    {
      name:"La mejor laptop",
      price: 328,
      image:'./assets/images/laptop.png'
    }
  ];
       

  toggleButton(){
    //this.btnDisabled = true;
    this.btnDisable = !this.btnDisable;
  }

  incraseAge(){
    this.person.age = this.person.age + 1;
  }

  onScroll(event: Event){
    //alert(event.target);
    //const element = event.target as HTMLDivElement;
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
