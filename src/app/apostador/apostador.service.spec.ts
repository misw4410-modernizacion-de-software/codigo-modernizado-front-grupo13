/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { inject, TestBed } from '@angular/core/testing';
import { ApostadorService } from './apostador.service';

describe('Service: Apostador', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApostadorService],
      imports:[HttpClientModule,RouterTestingModule,ToastrModule.forRoot({
        positionClass :'toast-bottom-right'
      })],
    });
  });

  it('should ...', inject([ApostadorService], (service: ApostadorService) => {
    expect(service).toBeTruthy();
  }));
});
