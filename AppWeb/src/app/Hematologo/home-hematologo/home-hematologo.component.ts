import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";
declare var window: any;

@Component({
  selector: 'app-home-hematologo',
  templateUrl: './home-hematologo.component.html',
  styleUrls: ['./home-hematologo.component.css']
})
export class HomeHematologoComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  SangrePerifericaId!: number;
  MedulaOseaId!: number;

  validarSangrePeriferica: boolean = false;
  validarMedulaOsea: boolean = false;


  paciente: Paciente[] = [];
  listPacientes:any;
  sangrePerifericaData: any;
  medulaOseaData: any;

  searchText = "";
  formModalSangrePeriferica: any;
  formModalMedulaOsea: any;

  constructor(private pacienteService : PacienteService,
              private medicoService : MedicoService,
              private sangrePerifericaService: SangrePerifericaService,
              private medulaOseaService: MedulaOseaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
  }

  ngOnInit(): void {
    this.pacienteService.getAllPaciente().subscribe((data: any) => {
      this.paciente = data;
      this.listPacientes = data;
    });

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
    this.router.navigate(['/home/hematologo/',this.MedicoId,'paciente',this.PacienteId ,'sangrePeriferica',this.SangrePerifericaId]);
  }

  saveSomeThingMedulaOsea() {
    this.formModalMedulaOsea.hide();
    this.router.navigate(['/home/hematologo/',this.MedicoId,'paciente',this.PacienteId ,'medulaOsea',this.MedulaOseaId]);
  }

  refresh(){
    window.location.reload()
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
        this.router.navigate(['/home/hematologo/',this.MedicoId,'paciente',this.PacienteId ,'sangrePeriferica']);
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
        this.router.navigate(['/home/hematologo/',this.MedicoId,'paciente',this.PacienteId ,'medulaOsea']);
      }

    });
  }

  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toString().toLocaleLowerCase();

      this.listPacientes = this.listPacientes.filter((contact:any) =>{
        return contact.dni.toString().toLocaleLowerCase().match(searchValue);
        // you can keep on adding object properties here
      });

      console.log(this.listPacientes);
    }
    else {
      this.pacienteService.getAllPaciente().subscribe(data => {

        this.listPacientes = data;

      }, error => console.error(error));
      // if(this.searchText== ""){ you don't need this if
    }
  }

}
