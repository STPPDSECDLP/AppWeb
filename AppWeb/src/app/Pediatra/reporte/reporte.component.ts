import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SangrePeriferica} from "../../Shared/Interface/sangre-periferica";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedulaOsea} from "../../Shared/Interface/medula-osea";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";
import {ReporteService} from "../../Shared/Service/reporte.service";
import {Prediccion} from "../../Shared/Interface/prediccion";
import {PrediccionService} from "../../Shared/Service/prediccion.service";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  @ViewChild("comentario") comentario!: ElementRef;
  @ViewChild("observacion") observacion! : ElementRef;
  @ViewChild("observacion") prediccion! : ElementRef;

  PacienteId!: number;
  MedicoId!: number;
  SangrePerifericaId!: number;
  MedulaOseaId!: number;


  validar: boolean = false;
  validarMedulaOsea: boolean = false;

  medulaOseaData: any;
  medulaOsea: MedulaOsea;

  sangrePerifericaData: any;
  sangrePeriferica: SangrePeriferica;

  prediccionResult: any;
  prediccionData!: Prediccion;

  constructor(private sangrePerifericaService: SangrePerifericaService,
              private reporteService: ReporteService,
              private medulaOseaService: MedulaOseaService,
              private prediccionService: PrediccionService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.sangrePeriferica = {} as SangrePeriferica;
    this.medulaOsea = {} as MedulaOsea;
    this
  }

  ngOnInit(): void {
    this.getReturnDataPacient();
    this.getReturnDataPacientMedulaOsea();
    this.getPrediction();
  }

  getReturnDataPacient(){
    this.sangrePerifericaService.getAllSangrePeriferica().subscribe(data=>{
      this.sangrePerifericaData = data;
      for (var i = 0; i < this.sangrePerifericaData.length; i++){
        if (this.PacienteId == this.sangrePerifericaData[i].pacienteId){
          this.SangrePerifericaId = this.sangrePerifericaData[i].id;
          this.sangrePerifericaService.getSangrePerifericaById(this.sangrePerifericaData[i].id).subscribe((response:any) => {
            this.sangrePeriferica = response[0];
            this.validar = true;
          })
        }
      }
    })
  }

  getReturnDataPacientMedulaOsea(){
    this.medulaOseaService.getAllMedulaOsea().subscribe(data=>{
      this.medulaOseaData = data;
      for (var i = 0; i < this.medulaOseaData.length; i++){
        if (this.PacienteId == this.medulaOseaData[i].pacienteId){
          this.MedulaOseaId = this.medulaOseaData[i].id;
          this.medulaOseaService.getMedulaOseaById(this.medulaOseaData[i].id).subscribe((response: any) => {
            this.medulaOsea = response[0];
            this.validarMedulaOsea = true;
          })
        }
      }
    })
  }

  getPrediction(){
    const prediccionNew = {data: this.prediccionData}
    this.prediccionService.getPrediccion(prediccionNew).subscribe(data=>{
      this.prediccionResult = data;
    })
  }

  Registrar():void{
    var comentario = this.comentario.nativeElement.value;
    var observacion = this.observacion.nativeElement.value;

    let pacienteId = parseFloat(this.PacienteId.toString());
    let medicoId = parseFloat(this.MedicoId.toString());

    const reporteNew = {pacienteId: pacienteId,
        medicoId: medicoId,
        sangrePerifericaId: this.SangrePerifericaId,
        medulaOseaId: this.MedulaOseaId,
        prediccion: "Positivo", // TEMPORAL HASTA TENER LA PREDICCIÓN CON ML
        comentario: comentario,
        observacion: observacion
    };

      this.reporteService.addReporte(reporteNew).subscribe((response: any) => {
        this.router.navigate(['home/pediatra/',this.MedicoId]);
      });
  }
}
