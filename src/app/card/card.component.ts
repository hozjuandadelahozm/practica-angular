import { Component, OnInit, Input } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() dataEntrante:any
  public image:string;

  constructor(private ServicioFavorito: ServicioDeFavoritosService) {
    this.image = ''
  }

  ngOnInit(): void {
    //this.image = 'https://nfnatcane.es/blog/wp-content/uploads/2022/03/American-Pitbull-Terrier.jpg'
    //console.log('Entrando data:', this.dataEntrante);
  }

  agregarFavorito(){
    //console.log(this.dataEntrante);
    this.ServicioFavorito.disparadorDeFavoritos.emit({
      data: this.dataEntrante
    })
  }
}
