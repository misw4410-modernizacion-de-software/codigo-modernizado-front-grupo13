/* tslint:disable:no-unused-variable */
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApostadorListComponent } from './apostador-list.component';

describe('ApostadorListComponent', () => {
  let component: ApostadorListComponent;
  let fixture: ComponentFixture<ApostadorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApostadorListComponent],
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
    fixture = TestBed.createComponent(ApostadorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
