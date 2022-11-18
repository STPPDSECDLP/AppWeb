import { Component, OnInit } from '@angular/core';
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Paciente} from "../../Shared/Interface/paciente";
import {SangrePeriferica} from "../../Shared/Interface/sangre-periferica";

@Component({
  selector: 'app-sangre-periferica-visualizar',
  templateUrl: './sangre-periferica-visualizar.component.html',
  styleUrls: ['./sangre-periferica-visualizar.component.css']
})
export class SangrePerifericaVisualizarComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  validar: boolean = false;

  sangrePerifericaData: any;
  sangrePeriferica: SangrePeriferica;

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private sangrePerifericaService: SangrePerifericaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.sangrePeriferica = {} as SangrePeriferica;
  }

  ngOnInit(): void {
    this.getReturnDataPacient();
  }

  getReturnDataPacient(){
    this.sangrePerifericaService.getAllSangrePeriferica().subscribe(data=>{
      this.sangrePerifericaData = data;
      for (var i = 0; i < this.sangrePerifericaData.length; i++){
        if (this.PacienteId == this.sangrePerifericaData[i].pacienteId){
          this.sangrePerifericaService.getSangrePerifericaById(this.sangrePerifericaData[i].id).subscribe(response => {
            this.sangrePeriferica = response;
            this.validar = true;
          })
        }
      }
    })
  }
}
