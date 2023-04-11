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
  prediccionData!: String;

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
    //this.getReturnDataPacient();
    //this.getReturnDataPacientMedulaOsea();
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
    this.getReturnDataPacient();
    this.getReturnDataPacientMedulaOsea();

    console.log(this.sangrePeriferica.linfBMaduroEinterm.toString())

    this.prediccionData = this.sangrePeriferica.linfoblastoBPatologico.toString() 
    + this.sangrePeriferica.blastoMieloide.toString() 
    + this.sangrePeriferica.linfoblastoBNormal.toString() 
    + this.sangrePeriferica.linfBMaduroEinterm.toString() 
    + this.sangrePeriferica.linfocitosT.toString() 
    + this.sangrePeriferica.celulasNK.toString() 
    + this.sangrePeriferica.serieGranulocitoNeutrofilo.toString() 
    + this.sangrePeriferica.serieMonocritica.toString() 
    + this.sangrePeriferica.eosinofilo.toString() 
    + this.sangrePeriferica.basofiloCD.toString() 
    + this.sangrePeriferica.serieEritroide.toString() 
    + this.sangrePeriferica.plasmocito.toString() 
    + this.sangrePeriferica.celularidad.toString()
    + this.medulaOsea.linfoblastoBPatologico.toString()
    + this.medulaOsea.blastoMieloide.toString()
    + this.medulaOsea.linfoblastoBNormal.toString()
    + this.medulaOsea.linfBMaduroEinterm.toString()
    + this.medulaOsea.linfocitosTNK.toString()
    + this.medulaOsea.celMesenquimal.toString()
    + this.medulaOsea.serieGranulocitoNeutrofilo.toString()
    + this.medulaOsea.serieMonocritica.toString()
    + this.medulaOsea.eosinofilo.toString()
    + this.medulaOsea.basofiloCD.toString()
    + this.medulaOsea.serieEritroide.toString()
    +this.medulaOsea.plasmocito.toString()
    + this.medulaOsea.celularidad.toString();

    const prediccionNew = {data: this.prediccionData}
    console.log(prediccionNew);
    this.prediccionService.addPrediccion(prediccionNew).subscribe(data=>{
      this.prediccionResult = data;
      console.log(this.prediccionResult);
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
