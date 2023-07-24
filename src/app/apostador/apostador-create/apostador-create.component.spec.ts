/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApostadorCreateComponent } from './apostador-create.component';

describe('ApostadorCreateComponent', () => {
  let component: ApostadorCreateComponent;
  let fixture: ComponentFixture<ApostadorCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApostadorCreateComponent],
      imports:[HttpClientModule,RouterTestingModule,ToastrModule.forRoot({
        positionClass :'toast-bottom-right'
      })],
      providers: [
        FormBuilder
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApostadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
