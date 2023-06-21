import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {PacienteService} from "../../Shared/Service/paciente.service";
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


  constructor(private pacienteService : PacienteService,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
  }

  ngOnInit(): void {
    this.pacienteService.getAllPaciente().subscribe((data: any) => {
      this.paciente = data;
      this.listPacientes = data;
    });
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
