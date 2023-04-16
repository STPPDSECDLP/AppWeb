import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {ActivatedRoute, Router} from "@angular/router";
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

  validarReporte: boolean = false;
  
  paciente: Paciente[] = [];
  listPacientes:any;
  reporteData: any;
  searchText = "";

  formModalReporte: any;

  constructor(private pacienteService : PacienteService,
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
