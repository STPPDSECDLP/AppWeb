import { Component, OnInit } from '@angular/core';
import {SangrePeriferica} from "../../Shared/Interface/sangre-periferica";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedulaOsea} from "../../Shared/Interface/medula-osea";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";

@Component({
  selector: 'app-medula-osea-visualizar',
  templateUrl: './medula-osea-visualizar.component.html',
  styleUrls: ['./medula-osea-visualizar.component.css']
})
export class MedulaOseaVisualizarComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  validar: boolean = false;

  medulaOseaData: any;
  medulaOsea: MedulaOsea;

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private medulaOseaService: MedulaOseaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.medulaOsea = {} as MedulaOsea;
  }

  ngOnInit(): void {
    this.getReturnDataPacient();
  }

  getReturnDataPacient(){
    this.medulaOseaService.getAllMedulaOsea().subscribe(data=>{
      this.medulaOseaData = data;
      for (var i = 0; i < this.medulaOseaData.length; i++){
        if (this.PacienteId == this.medulaOseaData[i].pacienteId){
          this.medulaOseaService.getMedulaOseaById(this.medulaOseaData[i].id).subscribe(response => {
            this.medulaOsea = response;
            this.validar = true;
          })
        }
      }
    })
  }
}
