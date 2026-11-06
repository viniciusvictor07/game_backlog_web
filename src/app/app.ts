import { Component, OnInit } from '@angular/core';
import { Game } from './services/game';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  gamesList: any[] = [];

  constructor(private gameService: Game) {}

  ngOnInit() {
    console.log('O componente carregou com sucesso!');
    this.gameService.getGames().subscribe((data: any) => {
      this.gamesList = data;
      console.log(this.gamesList);
    });
  }
}