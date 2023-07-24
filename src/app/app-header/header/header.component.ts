import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: String|null = "Admin";
  userId: Number;
  token: string;
  constructor(
    private routerPath: Router,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  goTo(menu: string) {
    const userId = parseInt(this.router.snapshot.params.userId);
    const token = this.router.snapshot.params.userToken;
    if (menu === "logIn") {
      this.routerPath.navigate([`/`])
    }
    else if (menu === "apostador") {
      this.routerPath.navigate([`/apostadores/${userId}/${token}`])
    }
    else if (menu === "editarPerfil") {
      this.routerPath.navigate([`/user/${userId}/${token}`])
    }
    else if (menu === "depositarDinero") {
      this.routerPath.navigate([`/user/${userId}/depositar/${token}`])
    }
    else if (menu === "retirarDinero") {
      this.routerPath.navigate([`/user/${userId}/retirar/${token}`])
    }
    else if (menu === "apuestaOwn") {
      this.routerPath.navigate([`/apuestas/show/${this.userId}/${this.token}`])
    }
    else if (menu === "transacciones") {
      this.routerPath.navigate([`/user/transacciones/${this.userId}/${this.token}`])
    }
    else {
      this.routerPath.navigate([`/apuestas/${userId}/${token}`])
    }
  }

}
