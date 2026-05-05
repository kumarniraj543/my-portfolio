import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";

@Component({
  imports: [RouterModule, Navbar],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'my-portfolio';
}
