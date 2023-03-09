import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Medico} from "../../Shared/Interface/medico";
import {AuthService} from "../../Shared/Service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-hematologo',
  templateUrl: './login-hematologo.component.html',
  styleUrls: ['./login-hematologo.component.css']
})
export class LoginHematologoComponent implements OnInit {
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
    console.log("this.medico");
    console.log(this.medico);
    for (var i = 0; i < this.medico.length; i++){
      if (codigo == this.medico[i].codigo && contra == this.medico[i].clave && !this.medico[i].tipo){
        this.validacion = true;
        this.ingresante = this.medico[i].id;
      }
    }
    if (this.validacion || !this.validacion){
      this._router.navigate([`/home/hematologo/${this.ingresante}`]);
    }
    else{
      alert("Usuario incorrecto");
    }
  }
}
