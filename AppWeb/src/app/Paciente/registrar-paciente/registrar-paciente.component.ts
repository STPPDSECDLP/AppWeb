import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-registrar-paciente',
  templateUrl: './registrar-paciente.component.html',
  styleUrls: ['./registrar-paciente.component.css']
})
export class RegistrarPacienteComponent implements OnInit {
  box: number = 0;
  selecteEstado: string = '';
  genero:boolean = false;
  MedicoId!: number;
  id!: number;

  @ViewChild("nombre") nombre! : ElementRef;
  @ViewChild("direccion") direccion! : ElementRef;
  @ViewChild("fecha") fecha! : ElementRef;
  @ViewChild("dni") dni! : ElementRef;
  @ViewChild("email") email! : ElementRef;
  @ViewChild("telefono") telefono! : ElementRef;

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
  }

  ngOnInit(): void {
  }

  getSexo(event: any){
    this.selecteEstado = event.target.value;

    if (this.selecteEstado == '0') {
      this.box = 0;
    }
    if (this.selecteEstado == '1') {
      this.box = 1;
    }
    if (this.selecteEstado == '2') {
      this.box = 2;
    }
  }

  Registrar():void{
    var nombre = this.nombre.nativeElement.value;
    var direccion = this.direccion.nativeElement.value;
    var fecha = this.fecha.nativeElement.value;
    var dni = this.dni.nativeElement.value;
    var email = this.email.nativeElement.value;
    var telefono = this.telefono.nativeElement.value;

    if(nombre == '' || direccion == '' || fecha == '' || dni == '' || email == '' || telefono == '' || this.box == 0){
      alert("Complete todos los campos");
    }
    else {
      if (this.box == 1){
        this.genero = true;
      }
      else {
        this.genero = false;
      }

      if (dni.length == 8){
        this.id = Number(dni);

        const newPaciente = {dni: dni,
          nombre: nombre,
          fechaNacimiento: fecha,
          genero: this.genero,
          correo: email,
          direccion: direccion,
          telefono: telefono};
        this.pacienteService.addPaciente(newPaciente).subscribe((response: any) => {
          this.router.navigate(['home/pediatra/',this.MedicoId]);
        });
      }
      else{
        alert('DNI no valido');
      }
    }
  }
}
