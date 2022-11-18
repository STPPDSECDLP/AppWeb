import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
declare var window: any;

@Component({
  selector: 'app-home-hematologo',
  templateUrl: './home-hematologo.component.html',
  styleUrls: ['./home-hematologo.component.css']
})
export class HomeHematologoComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  validar: boolean = false;
  sangrePerifericaId!: number;

  paciente: Paciente[] = [];
  listPacientes:any;
  sangrePerifericaData: any;

  searchText = "";
  formModal: any;

  constructor(private pacienteService : PacienteService,
              private medicoService : MedicoService,
              private sangrePerifericaService: SangrePerifericaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
  }

  ngOnInit(): void {
    this.pacienteService.getAllPaciente().subscribe((data: any) => {
      this.paciente = data;
      this.listPacientes = data;
    });

    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );
  }

  openFormModal() {
    this.formModal.show();
  }
  saveSomeThing() {
    this.formModal.hide();
    this.router.navigate(['/home/hematologo/',this.MedicoId,'paciente',this.PacienteId ,'sangrePeriferica',this.sangrePerifericaId]);
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
          this.sangrePerifericaId = this.sangrePerifericaData[i].id;
          this.validar = true;
        }
      }

      if (this.validar){
        this.openFormModal();
      }
      else {
        this.router.navigate(['/home/hematologo/',this.MedicoId,'paciente',this.PacienteId ,'sangrePeriferica']);
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
