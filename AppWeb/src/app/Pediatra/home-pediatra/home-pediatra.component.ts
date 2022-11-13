import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Shared/Interface/paciente";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedicoService} from "../../Shared/Service/medico.service";



@Component({
  selector: 'app-home-pediatra',
  templateUrl: './home-pediatra.component.html',
  styleUrls: ['./home-pediatra.component.css']
})
export class HomePediatraComponent implements OnInit {
  paciente: Paciente[] = [];
  listPacientes:any;
  MedicoId!: number;
  searchText = "";

  constructor(private pacienteService : PacienteService,
              private medicoService : MedicoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.pacienteService.getAllPaciente().subscribe((data: any) => {
      this.paciente = data;
      this.listPacientes = data;
    });
    this.getMedicoId();
  }

  Search(){
    // alert(this.searchText)
    if(this.searchText!== ""){
      let searchValue = this.searchText.toString().toLocaleLowerCase();

      this.listPacientes = this.listPacientes.filter((contact:any) =>{
        return contact.id.toString().toLocaleLowerCase().match(searchValue);
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

  getMedicoId(): void{
    this.MedicoId = Number(this.route.params.subscribe(params => {
      this.medicoService.getMedicoById(params['medicoId']).subscribe((response: any)=> {
        this.MedicoId = params['medicoId'];
      });
    }));
  }

}
