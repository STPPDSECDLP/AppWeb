import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";
import { ReporteService } from 'src/app/Shared/Service/reporte.service';
declare var window: any;


@Component({
  selector: 'app-home-pediatra',
  templateUrl: './home-pediatra.component.html',
  styleUrls: ['./home-pediatra.component.css']
})
export class HomePediatraComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  ReporteId!: number;
  SangrePerifericaId!: number;
  MedulaOseaId!: number;

  validarReporte: boolean = false;
  validarSangrePeriferica: boolean = false;
  validarMedulaOsea: boolean = false;
  
  paciente: Paciente[] = [];
  listPacientes:any;
  reporteData: any;
  sangrePerifericaData: any;
  medulaOseaData: any;
  searchText = "";

  formModalReporte: any;
  formModalSangrePeriferica: any;
  formModalMedulaOsea: any;

  constructor(private pacienteService : PacienteService,
    private sangrePerifericaService: SangrePerifericaService,
              private medulaOseaService: MedulaOseaService,
              private reporteService : ReporteService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
  }

  ngOnInit(): void {
    this.pacienteService.getAllPaciente().subscribe((data: any) => {
      this.paciente = data;
      this.listPacientes = data;
    });

    this.formModalReporte = new window.bootstrap.Modal(
      document.getElementById('modalReporte')
    );

    this.formModalSangrePeriferica = new window.bootstrap.Modal(
      document.getElementById('modalSangrePeriferica')
    );

    this.formModalMedulaOsea = new window.bootstrap.Modal(
      document.getElementById('modalMedulaOsea')
    );
  }

  openFormModalSangrePeriferica() {
    this.formModalSangrePeriferica.show();
  }

  openFormModalMedulaOsea() {
    this.formModalMedulaOsea.show();
  }

  saveSomeThingSangrePeriferica() {
    this.formModalSangrePeriferica.hide();
    this.router.navigate(['/home/pediatra/',this.MedicoId,'paciente',this.PacienteId ,'sangrePeriferica',this.SangrePerifericaId]);
  }

  saveSomeThingMedulaOsea() {
    this.formModalMedulaOsea.hide();
    this.router.navigate(['/home/pediatra/',this.MedicoId,'paciente',this.PacienteId ,'medulaOsea',this.MedulaOseaId]);
  }


  editReporte(idPaciente: number){
    this.PacienteId = idPaciente;
    this.reporteService.getAllReportes().subscribe(data=>{
      this.reporteData = data;
      for (var i = 0; i < this.reporteData.length; i++){
        if (this.PacienteId  == this.reporteData[i].pacienteId){
          this.ReporteId = this.reporteData[i].id;
          this.validarReporte = true;
        }
      }

      if (this.validarReporte){
        this.openFormModalReporte();
      }
      else {
        this.router.navigate(['/home/pediatra/',this.MedicoId,'paciente',this.PacienteId ,'reporte']);
      }

    });
  }

  editSangrePeriferica(idPaciente: number){
    this.PacienteId = idPaciente;
    this.sangrePerifericaService.getAllSangrePeriferica().subscribe(data=>{
      this.sangrePerifericaData = data;
      for (var i = 0; i < this.sangrePerifericaData.length; i++){
        if (this.PacienteId  == this.sangrePerifericaData[i].pacienteId){
          this.SangrePerifericaId = this.sangrePerifericaData[i].id;
          this.validarSangrePeriferica = true;
        }
      }

      if (this.validarSangrePeriferica){
        this.openFormModalSangrePeriferica();
      }
      else {
        this.router.navigate(['/home/pediatra/',this.MedicoId,'paciente',this.PacienteId ,'sangrePeriferica']);
      }

    });
  }

  editMedulaOsea(idPaciente: number){
    this.PacienteId = idPaciente;
    this.medulaOseaService.getAllMedulaOsea().subscribe(data=>{
      this.medulaOseaData = data;
      for (var i = 0; i < this.medulaOseaData.length; i++){
        if (this.PacienteId  == this.medulaOseaData[i].pacienteId){
          this.MedulaOseaId = this.medulaOseaData[i].id;
          this.validarMedulaOsea = true;
        }
      }

      if (this.validarMedulaOsea){
        this.openFormModalMedulaOsea();
      }
      else {
        this.router.navigate(['/home/pediatra/',this.MedicoId,'paciente',this.PacienteId ,'medulaOsea']);
      }

    });
  }

  openFormModalReporte() {
    this.formModalReporte.show();
  }
  refresh(){
    window.location.reload()
  }
  saveSomeThingReporte() {
    this.formModalReporte.hide();
    this.router.navigate(['/home/pediatra/',this.MedicoId,'paciente',this.PacienteId ,'reporte', this.ReporteId]);
  }

  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toString().toLocaleLowerCase();

      this.listPacientes = this.listPacientes.filter((contact:any) =>{
        return contact.dni.toString().toLocaleLowerCase().match(searchValue);
             });

      console.log(this.listPacientes);
    }
    else {
      this.pacienteService.getAllPaciente().subscribe(data => {

        this.listPacientes = data;

      }, error => console.error(error));
     
    }
  }
}
