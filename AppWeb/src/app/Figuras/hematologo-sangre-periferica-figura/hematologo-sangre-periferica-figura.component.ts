import { Component, OnInit } from '@angular/core';
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Paciente} from "../../Shared/Interface/paciente";
import {Medico} from "../../Shared/Interface/medico";

@Component({
  selector: 'app-hematologo-sangre-periferica-figura',
  templateUrl: './hematologo-sangre-periferica-figura.component.html',
  styleUrls: ['./hematologo-sangre-periferica-figura.component.css']
})
export class HematologoSangrePerifericaFiguraComponent implements OnInit {
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
  }

  ngOnInit(): void {
    this.getPacienteId();
    this.getMedicoId();
  }

  getPacienteId(): void{
    this.PacienteId = Number(this.route.params.subscribe(params => {
      this.pacienteService.getPacienteById(params['pacienteId']).subscribe((response: any)=> {
        this.PacienteId = params['pacienteId'];
        this.paciente = response;
      });
    }));
  }

  getMedicoId(): void{
    this.MedicoId = Number(this.route.params.subscribe(params => {
      this.medicoService.getMedicoById(params['medicoId']).subscribe((response: any)=> {
        this.MedicoId = params['medicoId'];
        this.medico = response;
      });
    }));
  }
}
