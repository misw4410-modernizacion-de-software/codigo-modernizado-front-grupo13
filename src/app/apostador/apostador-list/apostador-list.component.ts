import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from "ngx-toastr";
import { Apostador } from '../apostador';
import { ApostadorService } from '../apostador.service';

@Component({
  selector: 'app-apostador-list',
  templateUrl: './apostador-list.component.html',
  styleUrls: ['./apostador-list.component.css']
})
export class ApostadorListComponent implements OnInit {

  constructor(
    private apostadorService: ApostadorService,
    private toastr: ToastrService,
    private routerPath: Router
  ) { }
  apostadores: Array<Apostador>;

  ngOnInit() {
    this.getApostadores();
  }

  getApostadores(): void {
    this.apostadorService.getApostadores()
      .subscribe(apostadores => {
        this.apostadores = apostadores;
      },
        error => {
          this.showError("Ha ocurrido un error. " + error.error.message)
        })

  }

  irCrearApostador() {
    this.routerPath.navigate([`/apostadores/crear/`])
  }

  showError(error: string) {
    this.toastr.error(error, "Error de autenticación")
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
  }
}
