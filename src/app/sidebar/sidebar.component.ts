import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private ServicioFavorito: ServicioDeFavoritosService) {

  }

  ngOnInit(): void {
    this.ServicioFavorito.disparadorDeFavoritos.subscribe(data => {
      console.log('Recibiendo data...', data);
    })
  }
}
