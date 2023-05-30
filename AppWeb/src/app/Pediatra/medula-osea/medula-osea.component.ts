import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";

@Component({
  selector: 'app-medula-osea',
  templateUrl: './medula-osea.component.html',
  styleUrls: ['./medula-osea.component.css']
})
export class MedulaOseaComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;

  @ViewChild("dolorPersistenteHuesos") dolorPersistenteHuesos! : ElementRef;
  @ViewChild("dolorPersistenteAbdomen") dolorPersistenteAbdomen! : ElementRef;
  @ViewChild("fiebrePersistente") fiebrePersistente! : ElementRef;
  @ViewChild("moretones") moretones! : ElementRef;
  @ViewChild("sangradoNarizEncias") sangradoNarizEncias! : ElementRef;
  @ViewChild("crecimientoTumoral") crecimientoTumoral! : ElementRef;
  @ViewChild("inflamacionGanglios") inflamacionGanglios! : ElementRef;
  @ViewChild("picazonCorporal") picazonCorporal! : ElementRef;
  @ViewChild("cansancioFacil") cansancioFacil! : ElementRef;
  @ViewChild("palidez") palidez! : ElementRef;
  @ViewChild("anemiaSubita") anemiaSubita! : ElementRef;
  @ViewChild("perdidaPeso") perdidaPeso! : ElementRef;
  @ViewChild("dolorCabeza") dolorCabeza! : ElementRef;
  @ViewChild("vomitosMatutinos") vomitosMatutinos! : ElementRef;
  @ViewChild("crecimientoRapidoAbdomen") crecimientoRapidoAbdomen! : ElementRef;

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private medulaOseaService: MedulaOseaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
  }

  ngOnInit(): void {
  }

  Registrar():void{
    var dolorPersistenteHuesos = this.dolorPersistenteHuesos.nativeElement.value;
    var dolorPersistenteAbdomen = this.dolorPersistenteAbdomen.nativeElement.value;
    var fiebrePersistente = this.fiebrePersistente.nativeElement.value;
    var moretones = this.moretones.nativeElement.value;
    var sangradoNarizEncias = this.sangradoNarizEncias.nativeElement.value;
    var crecimientoTumoral = this.crecimientoTumoral.nativeElement.value;
    var inflamacionGanglios = this.inflamacionGanglios.nativeElement.value;
    var picazonCorporal = this.picazonCorporal.nativeElement.value;
    var cansancioFacil = this.cansancioFacil.nativeElement.value;
    var palidez = this.palidez.nativeElement.value;
    var anemiaSubita = this.anemiaSubita.nativeElement.value;
    var perdidaPeso = this.perdidaPeso.nativeElement.value;
    var dolorCabeza = this.dolorCabeza.nativeElement.value;
    var vomitosMatutinos = this.vomitosMatutinos.nativeElement.value;
    var crecimientoRapidoAbdomen = this.crecimientoRapidoAbdomen.nativeElement.value;

    if(dolorPersistenteHuesos == '' || dolorPersistenteAbdomen == '' || fiebrePersistente == '' || moretones == '' ||
    sangradoNarizEncias == '' || crecimientoTumoral == '' || inflamacionGanglios == '' || picazonCorporal == '' ||
    cansancioFacil == '' || palidez == '' || anemiaSubita == '' || perdidaPeso == '' || dolorCabeza == '' 
    || vomitosMatutinos == '' || crecimientoRapidoAbdomen == ''){
      alert("Complete todos los campos");
    }
    else {
      let a = dolorPersistenteHuesos;
      let b = dolorPersistenteAbdomen;
      let c = fiebrePersistente;
      let d = moretones;
      let e = sangradoNarizEncias;
      let f = crecimientoTumoral;
      let g = inflamacionGanglios;
      let h = picazonCorporal;
      let i = cansancioFacil;
      let j = palidez;
      let k = anemiaSubita;
      let l = perdidaPeso;
      let m = dolorCabeza;
      let n = vomitosMatutinos;
      let o = crecimientoRapidoAbdomen;
      let pacienteId = parseFloat(this.PacienteId.toString());

      const medulaOseaNew = {pacienteId: pacienteId,
        dolorPersistenteHuesos: a,
        dolorPersistenteAbdomen: b,
        fiebrePersistente: c,
        moretones: d,
        sangradoNarizEncias: e,
        crecimientoTumoral: f,
        inflamacionGanglios: g,
        picazonCorporal: h,
        cansancioFacil: i,
        palidez: j,
        anemiaSubita: k,
        perdidaPeso: l,
        dolorCabeza: m,
        vomitosMatutinos: n,
        crecimientoRapidoAbdomen: o,
      };

      this.medulaOseaService.addMedulaOsea(medulaOseaNew).subscribe((response: any) => {
        this.router.navigate(['home/pediatra/',this.MedicoId]);
      });
    }
  }

}
