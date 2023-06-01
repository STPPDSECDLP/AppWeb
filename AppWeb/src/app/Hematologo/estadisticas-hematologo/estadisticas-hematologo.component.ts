import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Chart, registerables } from 'node_modules/chart.js';
import { EstadisticasService } from 'src/app/Shared/Service/estadisticas.service';
import * as Util from "util";
Chart.register(...registerables);


@Component({
    selector: 'app-estadisticas',
    templateUrl: './estadisticas-hematologo.component.html',
    styleUrls: ['./estadisticas-hematologo.component.css']
})
export class EstadisticasHematologoComponent implements OnInit {

    MedicoId!: number;
    estadisticaSexo: any;
    estadisticaEdad: any;
    chartData: any;

    sexoData: any[] = [];
    edadData: any[] = [];
    edadNegativo: any[] = [];

    constructor(private estadisticasService: EstadisticasService,
        private router: Router,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.MedicoId = params['medicoId'])
    }

    ngOnInit(): void {
        this.getSexo();
        this.getEdad();

    }

    getSexo() {
        this.estadisticasService.getSexoEstadisticas().subscribe((response: any) => {
            this.estadisticaSexo = response;
            console.log('POR SEXO')
            console.log(this.estadisticaSexo)
            for (let i = 0; i < this.estadisticaSexo.length; i++) {
                this.sexoData.push(this.estadisticaSexo[i].total)
            }

            const sexoChart = new Chart("sexoChart", {
                type: 'doughnut',
                data: {
                    labels: ['Femenino -', 'Femenino +', 'Masculino -', 'Masculino +'],
                    datasets: [{
                        label: '# de Pacientes',
                        data: this.sexoData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })

    }

    getEdad() {
        this.estadisticasService.getEdadEstadisticas().subscribe((response: any) => {
            this.estadisticaEdad = response;
            console.log('POR EDAD')
            console.log(this.estadisticaEdad)
            for (let i = 0; i < this.estadisticaEdad.length; i++) {
                if (this.estadisticaEdad[i].prediccion == 'POSITIVO') {
                    this.edadData.push(this.estadisticaEdad[i].total)
                }
                if (this.estadisticaEdad[i].prediccion == 'NEGATIVO') {
                    this.edadNegativo.push(this.estadisticaEdad[i].total)
                }

            }

            const edadChart = new Chart("edadChart", {
                type: 'line',
                data: {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                    datasets: [{
                        label: 'Positivo',
                        data: this.edadData,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                        borderWidth: 2,
                        yAxisID: 'y'
                    }, {
                        label: 'Negativo',
                        data: this.edadNegativo,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)',
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)',
                        ],
                        borderWidth: 2,
                    }]
                },

            });
        })
    }

}