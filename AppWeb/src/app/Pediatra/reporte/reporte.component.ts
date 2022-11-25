import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SangrePeriferica} from "../../Shared/Interface/sangre-periferica";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedulaOsea} from "../../Shared/Interface/medula-osea";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";
import {ReporteService} from "../../Shared/Service/reporte.service";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  @ViewChild("comentario") comentario!: ElementRef;
  @ViewChild("observacion") observacion! : ElementRef;

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

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private sangrePerifericaService: SangrePerifericaService,
              private reporteService: ReporteService,
              private medulaOseaService: MedulaOseaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.sangrePeriferica = {} as SangrePeriferica;
    this.medulaOsea = {} as MedulaOsea;
  }

  ngOnInit(): void {
    this.getReturnDataPacient();
    this.getReturnDataPacientMedulaOsea();
  }

  getReturnDataPacient(){
    this.sangrePerifericaService.getAllSangrePeriferica().subscribe(data=>{
      this.sangrePerifericaData = data;
      for (var i = 0; i < this.sangrePerifericaData.length; i++){
        if (this.PacienteId == this.sangrePerifericaData[i].pacienteId){
          this.SangrePerifericaId = this.sangrePerifericaData[i].id;
          this.sangrePerifericaService.getSangrePerifericaById(this.sangrePerifericaData[i].id).subscribe(response => {
            this.sangrePeriferica = response;
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
          this.medulaOseaService.getMedulaOseaById(this.medulaOseaData[i].id).subscribe(response => {
            this.medulaOsea = response;
            this.validarMedulaOsea = true;
          })
        }
      }
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
        comentario: comentario,
        observacion: observacion
    };

      this.reporteService.addReporte(reporteNew).subscribe((response: any) => {
        this.router.navigate(['home/pediatra/',this.MedicoId]);
      });
  }
}
