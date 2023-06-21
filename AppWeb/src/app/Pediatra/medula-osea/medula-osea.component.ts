import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MedulaOseaService } from "../../Shared/Service/medula-osea.service";

@Component({
  selector: 'app-medula-osea',
  templateUrl: './medula-osea.component.html',
  styleUrls: ['./medula-osea.component.css']
})
export class MedulaOseaComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  boxA: number = 0;
  boxB: number = 0;
  boxC: number = 0;
  boxD: number = 0;
  boxE: number = 0;
  boxF: number = 0;
  boxG: number = 0;
  boxH: number = 0;
  boxI: number = 0;
  boxJ: number = 0;
  boxK: number = 0;
  boxL: number = 0;
  boxM: number = 0;
  boxN: number = 0;
  boxO: number = 0;
  selecEstadoA: string = '';
  selecEstadoB: string = '';
  selecEstadoC: string = '';
  selecEstadoD: string = '';
  selecEstadoE: string = '';
  selecEstadoF: string = '';
  selecEstadoG: string = '';
  selecEstadoH: string = '';
  selecEstadoI: string = '';
  selecEstadoJ: string = '';
  selecEstadoK: string = '';
  selecEstadoL: string = '';
  selecEstadoM: string = '';
  selecEstadoN: string = '';
  selecEstadoO: string = '';
  dolorPersistenteHuesos: string = '';
  dolorPersistenteAbdomen: string = '';
  fiebrePersistente: string = '';
  moretones: string = '';
  sangradoNarizEncias: string = '';
  crecimientoTumoral: string = '';
  inflamacionGanglios: string = '';
  picazonCorporal: string = '';
  cansancioFacil: string = '';
  palidez: string = '';
  anemiaSubita: string = '';
  perdidaPeso: string = '';
  dolorCabeza: string = '';
  vomitosMatutinos: string = '';
  crecimientoRapidoAbdomen: string = '';

  constructor(private medulaOseaService: MedulaOseaService,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.MedicoId = params['medicoId'])
    this.route.params.subscribe(params => this.PacienteId = params['pacienteId'])
  }

  ngOnInit(): void {
  }

  getA(event: any) {
    this.selecEstadoA = event.target.value;

    if (this.selecEstadoA == '0') {
      this.boxA = 0;
    }
    if (this.selecEstadoA == '1') {
      this.boxA = 1;
    }
    if (this.selecEstadoA == '2') {
      this.boxA = 2;
    }
  }

  getB(event: any) {
    this.selecEstadoB = event.target.value;

    if (this.selecEstadoB == '0') {
      this.boxB = 0;
    }
    if (this.selecEstadoB == '1') {
      this.boxB = 1;
    }
    if (this.selecEstadoB == '2') {
      this.boxB = 2;
    }
  }

  getC(event: any) {
    this.selecEstadoC = event.target.value;

    if (this.selecEstadoC == '0') {
      this.boxC = 0;
    }
    if (this.selecEstadoC == '1') {
      this.boxC = 1;
    }
    if (this.selecEstadoC == '2') {
      this.boxC = 2;
    }
  }

  getD(event: any) {
    this.selecEstadoD = event.target.value;

    if (this.selecEstadoD == '0') {
      this.boxD = 0;
    }
    if (this.selecEstadoD == '1') {
      this.boxD = 1;
    }
    if (this.selecEstadoD == '2') {
      this.boxD = 2;
    }
  }

  getE(event: any) {
    this.selecEstadoE = event.target.value;

    if (this.selecEstadoE == '0') {
      this.boxE = 0;
    }
    if (this.selecEstadoE == '1') {
      this.boxE = 1;
    }
    if (this.selecEstadoE == '2') {
      this.boxE = 2;
    }
  }

  getF(event: any) {
    this.selecEstadoF = event.target.value;

    if (this.selecEstadoF == '0') {
      this.boxF = 0;
    }
    if (this.selecEstadoF == '1') {
      this.boxF = 1;
    }
    if (this.selecEstadoF == '2') {
      this.boxF = 2;
    }
  }

  getG(event: any) {
    this.selecEstadoG = event.target.value;

    if (this.selecEstadoG == '0') {
      this.boxG = 0;
    }
    if (this.selecEstadoG == '1') {
      this.boxG = 1;
    }
    if (this.selecEstadoG == '2') {
      this.boxG = 2;
    }
  }

  getH(event: any) {
    this.selecEstadoH = event.target.value;

    if (this.selecEstadoH == '0') {
      this.boxH = 0;
    }
    if (this.selecEstadoH == '1') {
      this.boxH = 1;
    }
    if (this.selecEstadoH == '2') {
      this.boxH = 2;
    }
  }

  getI(event: any) {
    this.selecEstadoI = event.target.value;

    if (this.selecEstadoI == '0') {
      this.boxI = 0;
    }
    if (this.selecEstadoI == '1') {
      this.boxI = 1;
    }
    if (this.selecEstadoI == '2') {
      this.boxI = 2;
    }
  }

  getJ(event: any) {
    this.selecEstadoJ = event.target.value;

    if (this.selecEstadoJ == '0') {
      this.boxJ = 0;
    }
    if (this.selecEstadoJ == '1') {
      this.boxJ = 1;
    }
    if (this.selecEstadoJ == '2') {
      this.boxJ = 2;
    }
  }

  getK(event: any) {
    this.selecEstadoK = event.target.value;

    if (this.selecEstadoK == '0') {
      this.boxK = 0;
    }
    if (this.selecEstadoK == '1') {
      this.boxK = 1;
    }
    if (this.selecEstadoK == '2') {
      this.boxK = 2;
    }
  }

  getL(event: any) {
    this.selecEstadoL = event.target.value;

    if (this.selecEstadoL == '0') {
      this.boxL = 0;
    }
    if (this.selecEstadoL == '1') {
      this.boxL = 1;
    }
    if (this.selecEstadoL == '2') {
      this.boxL = 2;
    }
  }

  getM(event: any) {
    this.selecEstadoM = event.target.value;

    if (this.selecEstadoM == '0') {
      this.boxM = 0;
    }
    if (this.selecEstadoM == '1') {
      this.boxM = 1;
    }
    if (this.selecEstadoM == '2') {
      this.boxM = 2;
    }
  }

  getN(event: any) {
    this.selecEstadoN = event.target.value;

    if (this.selecEstadoN == '0') {
      this.boxN = 0;
    }
    if (this.selecEstadoN == '1') {
      this.boxN = 1;
    }
    if (this.selecEstadoN == '2') {
      this.boxN = 2;
    }
  }

  getO(event: any) {
    this.selecEstadoO = event.target.value;

    if (this.selecEstadoO == '0') {
      this.boxO = 0;
    }
    if (this.selecEstadoO == '1') {
      this.boxO = 1;
    }
    if (this.selecEstadoO == '2') {
      this.boxO = 2;
    }
  }

  Registrar(): void {

    if (this.boxA == 0 || this.boxB == 0 || this.boxC == 0 || this.boxD == 0 || this.boxE == 0
      || this.boxF == 0 || this.boxG == 0 || this.boxH == 0 || this.boxI == 0
      || this.boxJ == 0 || this.boxK == 0 || this.boxL == 0 || this.boxM == 0
      || this.boxN == 0 || this.boxO == 0) {
      alert("Complete todos los campos");
    }
    else {

      let pacienteId = parseFloat(this.PacienteId.toString());


      //Validacion A
      if (this.boxA == 1) {
        this.dolorPersistenteHuesos = "SI";
      }
      else {
        this.dolorPersistenteHuesos = "NO";
      }

      //Validacion B
      if (this.boxB == 1) {
        this.dolorPersistenteAbdomen = "SI";
      }
      else {
        this.dolorPersistenteAbdomen = "NO";
      }

      //Validacion C
      if (this.boxC == 1) {
        this.fiebrePersistente = "SI";
      }
      else {
        this.fiebrePersistente = "NO";
      }

      //Validacion D
      if (this.boxD == 1) {
        this.moretones = "SI";
      }
      else {
        this.moretones = "NO";
      }

      //Validacion E
      if (this.boxE == 1) {
        this.sangradoNarizEncias = "SI";
      }
      else {
        this.sangradoNarizEncias = "NO";
      }

      //Validacion F
      if (this.boxF == 1) {
        this.crecimientoTumoral = "SI";
      }
      else {
        this.crecimientoTumoral = "NO";
      }

      //Validacion G
      if (this.boxG == 1) {
        this.inflamacionGanglios = "SI";
      }
      else {
        this.inflamacionGanglios = "NO";
      }

      //Validacion H
      if (this.boxH == 1) {
        this.picazonCorporal = "SI";
      }
      else {
        this.picazonCorporal = "NO";
      }

      //Validacion I
      if (this.boxI == 1) {
        this.cansancioFacil = "SI";
      }
      else {
        this.cansancioFacil = "NO";
      }

      //Validacion J
      if (this.boxJ == 1) {
        this.palidez = "SI";
      }
      else {
        this.palidez = "NO";
      }

      //Validacion K
      if (this.boxK == 1) {
        this.anemiaSubita = "SI";
      }
      else {
        this.anemiaSubita = "NO";
      }

      //Validacion L
      if (this.boxL == 1) {
        this.perdidaPeso = "SI";
      }
      else {
        this.perdidaPeso = "NO";
      }

      //Validacion M
      if (this.boxM == 1) {
        this.dolorCabeza = "SI";
      }
      else {
        this.dolorCabeza = "NO";
      }

      //Validacion N
      if (this.boxN == 1) {
        this.vomitosMatutinos = "SI";
      }
      else {
        this.vomitosMatutinos = "NO";
      }

      //Validacion O
      if (this.boxO == 1) {
        this.crecimientoRapidoAbdomen = "SI";
      }
      else {
        this.crecimientoRapidoAbdomen = "NO";
      }

      const medulaOseaNew = {
        pacienteId: pacienteId,
        dolorPersistenteHuesos: this.dolorPersistenteHuesos,
        dolorPersistenteAbdomen: this.dolorPersistenteAbdomen,
        fiebrePersistente: this.fiebrePersistente,
        moretones: this.moretones,
        sangradoNarizEncias: this.sangradoNarizEncias,
        crecimientoTumoral: this.crecimientoTumoral,
        inflamacionGanglios: this.inflamacionGanglios,
        picazonCorporal: this.picazonCorporal,
        cansancioFacil: this.cansancioFacil,
        palidez: this.palidez,
        anemiaSubita: this.anemiaSubita,
        perdidaPeso: this.perdidaPeso,
        dolorCabeza: this.dolorCabeza,
        vomitosMatutinos: this.vomitosMatutinos,
        crecimientoRapidoAbdomen: this.crecimientoRapidoAbdomen,
      };

      this.medulaOseaService.addMedulaOsea(medulaOseaNew).subscribe((response: any) => {
        this.router.navigate(['home/pediatra/', this.MedicoId]);
      });
    }
  }

}
