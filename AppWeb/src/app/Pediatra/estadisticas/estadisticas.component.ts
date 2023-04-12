import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EstadisticasService } from 'src/app/Shared/Service/estadisticas.service';
import * as Util from "util";



@Component({
    selector: 'app-estadisticas',
    templateUrl: './estadisticas.component.html',
    styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

    MedicoId!: number;
    estadisticaSexo: any;
    estadisticaEdad: any;

    constructor(private estadisticasService: EstadisticasService,
        private router: Router,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.MedicoId = params['medicoId'])
    }

    ngOnInit(): void {
        this.getSexo();
        this.getEdad();

    }

    getSexo(){
        this.estadisticasService.getSexoEstadisticas().subscribe((response:any) => {
            this.estadisticaSexo = response;
            console.log('SEXO')
            console.log(this.estadisticaSexo)
          })
    }

    getEdad(){
        this.estadisticasService.getEdadEstadisticas().subscribe((response:any) => {
            this.estadisticaEdad = response;
            console.log('EDAD')
            console.log(this.estadisticaEdad)
          })
    }

}