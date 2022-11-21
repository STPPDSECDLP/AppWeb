import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {Medico} from "../../Shared/Interface/medico";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hematologo-medula-osea-figura',
  templateUrl: './hematologo-medula-osea-figura.component.html',
  styleUrls: ['./hematologo-medula-osea-figura.component.css']
})
export class HematologoMedulaOseaFiguraComponent implements OnInit {
  PacienteId!: number;
  paciente: Paciente;

  MedicoId!: number;
  medico: Medico;

  constructor(private pacienteService : PacienteService,
              private medicoService : MedicoService,
              private router: Router,
              private route: ActivatedRoute) {
    this.paciente = {} as Paciente;
    this.medico = {} as Medico;

    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
  }

  ngOnInit(): void {
    this.getPacienteId();
    this.getMedicoId();
  }

  getPacienteId(): void{
    this.pacienteService.getPacienteById(this.PacienteId).subscribe((response: any)=> {
      this.paciente = response;
    });
  }

  getMedicoId(): void{
    this.medicoService.getMedicoById(this.MedicoId).subscribe((response: any)=> {
      this.medico = response;
    });
  }

}
