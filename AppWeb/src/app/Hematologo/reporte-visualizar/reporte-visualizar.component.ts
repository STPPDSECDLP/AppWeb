import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SangrePeriferica } from "../../Shared/Interface/sangre-periferica";
import { SangrePerifericaService } from "../../Shared/Service/sangre-periferica.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MedulaOsea } from "../../Shared/Interface/medula-osea";
import { MedulaOseaService } from "../../Shared/Service/medula-osea.service";
import { ReporteService } from "../../Shared/Service/reporte.service";
import { PrediccionService } from "../../Shared/Service/prediccion.service";
import { Reporte } from 'src/app/Shared/Interface/reporte';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte-visualizar.component.html',
  styleUrls: ['./reporte-visualizar.component.css']
})
export class ReporteVisualizarComponent implements OnInit {
  @ViewChild("comentario") comentario!: ElementRef;
  @ViewChild("observacion") observacion!: ElementRef;
  @ViewChild("observacion") prediccion!: ElementRef;

  PacienteId!: number;
  MedicoId!: number;
  SangrePerifericaId!: number;
  MedulaOseaId!: number;

  ReporteId!: number;
  reporteData: any;
  reporteObj: Reporte;


  validar: boolean = false;
  validarMedulaOsea: boolean = false;

  medulaOseaData: any;
  medulaOsea: MedulaOsea;

  sangrePerifericaData: any;
  sangrePeriferica: SangrePeriferica;

  prediccionResult: any;
  prediccionData!: String;

 
  constructor(private sangrePerifericaService: SangrePerifericaService,
    private reporteService: ReporteService,
    private medulaOseaService: MedulaOseaService,
    private prediccionService: PrediccionService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.PacienteId = params['pacienteId'])
    this.route.params.subscribe(params => this.MedicoId = params['medicoId'])
    this.route.params.subscribe(params => this.ReporteId = params['reporteId'])
    this.sangrePeriferica = {} as SangrePeriferica;
    this.medulaOsea = {} as MedulaOsea;
    this.reporteObj = {} as Reporte;
  }

  ngOnInit(): void {
    this.getReturnDataPacient();
    this.getReturnDataPacientMedulaOsea();
    this.getReturnDataReporte();
    
  }

  getReturnDataReporte() {
    this.reporteService.getAllReportes().subscribe(data => {
        this.reporteData = data;
        for (var i = 0; i < this.reporteData.length; i++) {
            if (this.PacienteId == this.reporteData[i].pacienteId) {
                this.reporteService.getReporteById(this.reporteData[i].id).subscribe((response: any) => {
                    this.reporteObj = response[0];
                    this.prediccionResult = this.reporteObj.prediccion
                })
            }
        }

    })

}

  printPage() {
      window.print();
  }

  getReturnDataPacient() {
    this.sangrePerifericaService.getAllSangrePeriferica().subscribe(data => {
      this.sangrePerifericaData = data;
      for (var i = 0; i < this.sangrePerifericaData.length; i++) {
        if (this.PacienteId == this.sangrePerifericaData[i].pacienteId) {
          this.SangrePerifericaId = this.sangrePerifericaData[i].id;
          this.sangrePerifericaService.getSangrePerifericaById(this.sangrePerifericaData[i].id).subscribe((response: any) => {
            this.sangrePeriferica = response[0];
            this.validar = true;
          })
        }
      }
    })
  }

  getReturnDataPacientMedulaOsea() {
    this.medulaOseaService.getAllMedulaOsea().subscribe(data => {
      this.medulaOseaData = data;
      for (var i = 0; i < this.medulaOseaData.length; i++) {
        if (this.PacienteId == this.medulaOseaData[i].pacienteId) {
          this.MedulaOseaId = this.medulaOseaData[i].id;
          this.medulaOseaService.getMedulaOseaById(this.medulaOseaData[i].id).subscribe((response: any) => {
            this.medulaOsea = response[0];
            this.validarMedulaOsea = true;
          })
        }
      }
    })
  }
}
