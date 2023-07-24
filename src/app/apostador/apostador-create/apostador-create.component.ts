import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Apostador } from '../apostador';
import { ApostadorService } from '../apostador.service';

@Component({
  selector: 'app-apostador-create',
  templateUrl: './apostador-create.component.html',
  styleUrls: ['./apostador-create.component.css']
})
export class ApostadorCreateComponent implements OnInit {

  apostadorForm: FormGroup

  constructor(
    private apostadorService: ApostadorService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private routerPath: Router
  ) { }


  ngOnInit() {
    this.apostadorForm = this.formBuilder.group({
      nombre: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(128)]]
    });
    this.apostadorformArray.push(this.createApostadorForm());
  }

  get apostadorFormControls() {
    return this.apostadorForm?.controls;
  }

  get apostadorformArray() {
    return this.apostadorFormControls?.apostadores as FormArray;
  }

  private createApostadorForm(item?: any): FormGroup {
    return this.formBuilder.group({
      apostador: [item == null ? '' : item.apostador, [Validators.required, Validators.minLength(1), Validators.maxLength(128)]],
    });
  }

  cancelCreate() {
    this.apostadorForm.reset()
    this.routerPath.navigate([``])
  }

  createApostador(apostador: Apostador) {
    this.apostadorService.crearApostador(apostador)
      .subscribe(apostador => {
        this.showSuccess(apostador)
        this.apostadorForm.reset()
      },
        error => {
            this.showError("Ha ocurrido un error. " + error.error)
        })
    this.routerPath.navigate([``])
  }

  showError(error: string) {
    this.toastr.error(error, "Error")
  }

  showWarning(warning: string) {
    this.toastr.warning(warning, "Error de autenticación")
  }

  showSuccess(apostador: Apostador) {
    this.toastr.success(`El apostador fue creado`, "Creación exitosa");
  }
}
