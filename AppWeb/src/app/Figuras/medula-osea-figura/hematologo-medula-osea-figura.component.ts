import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {Medico} from "../../Shared/Interface/medico";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-medula-osea-figura',
  templateUrl: './hematologo-medula-osea-figura.component.html',
  styleUrls: ['./hematologo-medula-osea-figura.component.css']
})
export class HematologoMedulaOseaFiguraComponent implements OnInit {
  PacienteId!: number;
  paciente: Paciente;

  MedicoId!: number;
  medico: Medico;

  anioNacimiento! : number;
  mesNacimiento!  : number;
  diaNacimiento!  : number;

  constructor(private pacienteService : PacienteService,
              private medicoService : MedicoService,
              private router: Router,
              private route: ActivatedRoute) {
    this.paciente = {} as Paciente;
    this.medico = {} as Medico;

    this.route.params.subscribe(params=>this.MedicoId= params['medicoId']);
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId']);
  }

  ngOnInit(): void {
    this.getPacienteId();
    this.getMedicoId();

  }

  getPacienteId(): void{
    this.pacienteService.getPacienteById(this.PacienteId).subscribe((response: any)=> {
      this.paciente = response;

      this.convertDate(this.paciente.fechaNacimiento);
      this.CalcularEdad();
    });
  }

  convertDate(dateString: string){
    let d = dateString.split("/");
    let dat = new Date(d[2] + '/' + d[1] + '/' + d[0]);

    this.anioNacimiento = dat.getFullYear();
    this.mesNacimiento = dat.getMonth() + 1;
    this.diaNacimiento = dat.getDate();
    return dat;
  }

  CalcularEdad() {
    const hoy = new Date();

    let respFech = 0;
    let respMes = 0;

    let anioActual = hoy.getFullYear();
    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();

    if (diaActual < this.diaNacimiento) {   //En caso de ser menor la fecha actual que el nacimiento
      diaActual = diaActual + 30; // Se le suma los 30 días (1 mes) a la fecha actual
      mesActual = mesActual - 1; // Se le resta un mes (30 días) al mes actual
      respFech = diaActual - this.diaNacimiento; //Se le resta fecha nacimiento al actual
    } else //En caso de ser mayor la fecha actual que el nacimiento
      respFech = diaActual - this.diaNacimiento;  //Se le resta fecha nacimiento al actual

    if (mesActual < this.mesNacimiento) {   //En caso de ser menor el mes actual que el nacimiento
      mesActual = mesActual + 12; // Se le suma los 12 meses (1 año) al mes actual
      anioActual = anioActual - 1; // Se le resta 1 año ( 12 meses) al año actual
      respMes = mesActual - this.mesNacimiento; //Se le resta año nacimiento al actual
    } else //En caso de ser mayor el mes actual que el nacimiento
      respMes = mesActual - this.mesNacimiento; //Se le resta año nacimiento al actual

    this.anioNacimiento = anioActual - this.anioNacimiento;
    this.mesNacimiento  = respMes;
    this.diaNacimiento  = respFech;
  }

  getMedicoId(): void{
    this.medicoService.getMedicoById(this.MedicoId).subscribe((response: any)=> {
      this.medico = response;
    });
  }

}
