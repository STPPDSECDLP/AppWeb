import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthService} from "../../Shared/Service/auth.service";
import {Router} from "@angular/router";
import {Medico} from "../../Shared/Interface/medico";

@Component({
  selector: 'app-login-pediatra',
  templateUrl: './login-pediatra.component.html',
  styleUrls: ['./login-pediatra.component.css']
})
export class LoginPediatraComponent implements OnInit {
  medico: Medico[] = [];
  ingresante!:number;
  validacion: boolean = false;

  @ViewChild("codigo") codigo! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  constructor(private authService : AuthService,
              private _router: Router) { }

  ngOnInit(): void {
    this.authService.getAllPrueba().subscribe((data: any) => {
      this.medico = data;
    })
  }

  logIn():void {
    var codigo = this.codigo.nativeElement.value;
    var contra = this.password.nativeElement.value;
    for (var i = 0; i < this.medico.length; i++){
      if (codigo == this.medico[i].codigo && contra == this.medico[i].clave && this.medico[i].tipo){
          this.validacion = true;
          this.ingresante = this.medico[i].id;
      }
    }
    if (this.validacion){
      this._router.navigate([`/home/pediatra/${this.ingresante}`]);
    }
    else{
      alert("Usuario incorrecto");
    }
  }
}
