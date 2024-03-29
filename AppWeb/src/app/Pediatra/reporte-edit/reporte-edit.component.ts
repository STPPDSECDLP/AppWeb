import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SangrePeriferica } from "../../Shared/Interface/sangre-periferica";
import { SangrePerifericaService } from "../../Shared/Service/sangre-periferica.service";
import { ActivatedRoute, Router } from "@angular/router";
import { MedulaOsea } from "../../Shared/Interface/medula-osea";
import { MedulaOseaService } from "../../Shared/Service/medula-osea.service";
import { ReporteService } from "../../Shared/Service/reporte.service";
import { PrediccionService } from "../../Shared/Service/prediccion.service";
import { Reporte } from 'src/app/Shared/Interface/reporte';

@Component({
    selector: 'app-reporte-edit',
    templateUrl: './reporte-edit.component.html',
    styleUrls: ['./reporte-edit.component.css']
})
export class ReporteEditComponent implements OnInit {
    @ViewChild("comentario") comentario!: ElementRef;
    @ViewChild("observacion") observacion!: ElementRef;
    @ViewChild("observacion") prediccion!: ElementRef;

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

    ReporteId!: number;
    reporteData: any;
    reporteObj: Reporte;


    constructor(private sangrePerifericaService: SangrePerifericaService,
        private reporteService: ReporteService,
        private medulaOseaService: MedulaOseaService,
        private prediccionService: PrediccionService,
        private router: Router,
        private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.PacienteId = params['pacienteId'])
        this.route.params.subscribe(params => this.MedicoId = params['medicoId'])
        this.route.params.subscribe(params => this.ReporteId = params['reporteId'])
        this.sangrePeriferica = {} as SangrePeriferica;
        this.medulaOsea = {} as MedulaOsea;
        this.reporteObj = {} as Reporte;
    }

    ngOnInit(): void {
        this.getReturnDataPacient();
        this.getReturnDataPacientMedulaOsea();
        this.getReturnDataReporte();
    }

    getReturnDataReporte() {
        this.reporteService.getAllReportes().subscribe(data => {
            this.reporteData = data;
            for (var i = 0; i < this.reporteData.length; i++) {
                if (this.PacienteId == this.reporteData[i].pacienteId) {
                    this.reporteService.getReporteById(this.reporteData[i].id).subscribe((response: any) => {
                        this.reporteObj = response[0];
                        this.prediccionResult = this.reporteObj.prediccion
                    })
                }
            }

        })

    }

    printPage() {
        if (this.comentario.nativeElement.value == '' || this.observacion.nativeElement.value == '' /*|| this.prediccionResult == undefined*/) {
            alert("Completar los datos")
        } else {
            window.print();
        }
    }

    getReturnDataPacient() {
        this.sangrePerifericaService.getAllSangrePeriferica().subscribe(data => {
            this.sangrePerifericaData = data;
            for (var i = 0; i < this.sangrePerifericaData.length; i++) {
                if (this.PacienteId == this.sangrePerifericaData[i].pacienteId) {
                    this.SangrePerifericaId = this.sangrePerifericaData[i].id;
                    this.sangrePerifericaService.getSangrePerifericaById(this.sangrePerifericaData[i].id).subscribe((response: any) => {
                        this.sangrePeriferica = response[0];
                        this.validar = true;
                    })
                }
            }
        })
    }

    getReturnDataPacientMedulaOsea() {
        this.medulaOseaService.getAllMedulaOsea().subscribe(data => {
            this.medulaOseaData = data;
            for (var i = 0; i < this.medulaOseaData.length; i++) {
                if (this.PacienteId == this.medulaOseaData[i].pacienteId) {
                    this.MedulaOseaId = this.medulaOseaData[i].id;
                    this.medulaOseaService.getMedulaOseaById(this.medulaOseaData[i].id).subscribe((response: any) => {
                        this.medulaOsea = response[0];
                        this.validarMedulaOsea = true;
                    })
                }
            }
        })
    }

    getPrediction(): void {
/*
        const a = this.sangrePeriferica.linfoblastoBPatologico.toString()
        const b = this.sangrePeriferica.blastoMieloide.toString()
        const c = this.sangrePeriferica.linfoblastoBNormal.toString()
        const d = this.sangrePeriferica.linfBMaduroEinterm.toString()
        const e = this.sangrePeriferica.linfocitosT.toString()
        const f = this.sangrePeriferica.celulasNK.toString()
        const g = this.sangrePeriferica.serieGranulocitoNeutrofilo.toString()
        const h = this.sangrePeriferica.serieMonocritica.toString()
        const i = this.sangrePeriferica.eosinofilo.toString()
        const j = this.sangrePeriferica.basofiloCD.toString()
        const k = this.sangrePeriferica.serieEritroide.toString()
        const l = this.sangrePeriferica.plasmocito.toString()
        const m = this.sangrePeriferica.celularidad.toString()
        const n = this.medulaOsea.linfoblastoBPatologico.toString()
        const o = this.medulaOsea.blastoMieloide.toString()
        const p = this.medulaOsea.linfoblastoBNormal.toString()
        const q = this.medulaOsea.linfBMaduroEinterm.toString()
        const r = this.medulaOsea.linfocitosTNK.toString()
        const s = this.medulaOsea.celMesenquimal.toString()
        const t = this.medulaOsea.serieGranulocitoNeutrofilo.toString()
        const u = this.medulaOsea.serieMonocritica.toString()
        const v = this.medulaOsea.eosinofilo.toString()
        const w = this.medulaOsea.basofiloCD.toString()
        const x = this.medulaOsea.serieEritroide.toString()
        const y = this.medulaOsea.plasmocito.toString()
        const z = this.medulaOsea.celularidad;

        this.prediccionData = a + ',' + b + ',' + c + ',' + d + ',' + e + ',' + f + ',' + g + ',' + h + ',' + i + ',' + j + ',' + k + ',' + l + ',' + m + ',' + n + ',' + o + ',' + p + ',' + q + ',' + r + ',' + s + ',' + t + ',' + u + ',' + v + ',' + w + ',' + x + ',' + y + ',' + z;
*/
        const prediccionNew = { data: this.prediccionData }
        console.log(prediccionNew);
        this.prediccionService.addPrediccion(prediccionNew).subscribe(data => {
            this.prediccionResult = data;
            console.log(this.prediccionResult);
        })
    }

    Registrar(): void {
        var comentario = this.comentario.nativeElement.value;
        var observacion = this.observacion.nativeElement.value;

        let pacienteId = parseFloat(this.PacienteId.toString());
        let medicoId = parseFloat(this.MedicoId.toString());

        if (comentario == '' || observacion == '' /*|| this.prediccionResult == undefined*/) {
            alert("Completar los datos")
        }
        else {
            const reporteNew = {
                pacienteId: pacienteId,
                medicoId: medicoId,
                hemogramaId: this.SangrePerifericaId,
                examenClinicoId: this.MedulaOseaId,
                prediccion: "POSITIVO",//this.prediccionResult,
                comentario: comentario,
                observacion: observacion
            };

            this.reporteService.updateReporte(reporteNew).subscribe((response: any) => {
                this.router.navigate(['home/pediatra/', this.MedicoId]);
            });
        }

    }
}
