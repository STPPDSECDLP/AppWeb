import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";

@Component({
  selector: 'app-sangre-periferica',
  templateUrl: './sangre-periferica.component.html',
  styleUrls: ['./sangre-periferica.component.css']
})
export class SangrePerifericaComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;

  @ViewChild("hemoglobina") hemoglobina! : ElementRef;
  @ViewChild("hematocrito") hematocrito! : ElementRef;
  @ViewChild("hematies") hematies! : ElementRef;
  @ViewChild("volumenCorpuscularMedio") volumenCorpuscularMedio! : ElementRef;
  @ViewChild("hemoglobinaCorpuscularMedia") hemoglobinaCorpuscularMedia! : ElementRef;
  @ViewChild("concentracionHemoglobinaCorpuscular") concentracionHemoglobinaCorpuscular! : ElementRef;
  @ViewChild("indiceAnisocitosisRDW") indiceAnisocitosisRDW! : ElementRef;
  @ViewChild("indiceAnisocitosisRDWSD") indiceAnisocitosisRDWSD! : ElementRef;
  @ViewChild("leucocitosTotales") leucocitosTotales! : ElementRef;
  @ViewChild("eosinofilosP") eosinofilosP! : ElementRef;
  @ViewChild("basofilosP") basofilosP! : ElementRef;
  @ViewChild("linfocitosP") linfocitosP! : ElementRef;
  @ViewChild("monocitosP") monocitosP! : ElementRef;
  @ViewChild("neutrofilosSegmentadosP") neutrofilosSegmentadosP! : ElementRef;
  @ViewChild("bastonesP") bastonesP! : ElementRef;
  @ViewChild("eosinofilosD") eosinofilosD! : ElementRef;
  @ViewChild("basofilosD") basofilosD! : ElementRef;
  @ViewChild("linfocitosD") linfocitosD! : ElementRef;
  @ViewChild("monocitosD") monocitosD! : ElementRef;
  @ViewChild("neutrofilosSegmentadosD") neutrofilosSegmentadosD! : ElementRef;
  @ViewChild("bastonesD") bastonesD! : ElementRef;
  @ViewChild("recuentoPlaqueta") recuentoPlaqueta! : ElementRef;
  @ViewChild("volumenPlaquetarioMedio") volumenPlaquetarioMedio! : ElementRef;

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private sangrePerifericaService: SangrePerifericaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
  }

  ngOnInit(): void {
  }

  Registrar():void{
    var hemoglobina = this.hemoglobina.nativeElement.value;
    var hematocrito = this.hematocrito.nativeElement.value;
    var hematies = this.hematies.nativeElement.value;
    var volumenCorpuscularMedio = this.volumenCorpuscularMedio.nativeElement.value;
    var hemoglobinaCorpuscularMedia = this.hemoglobinaCorpuscularMedia.nativeElement.value;
    var concentracionHemoglobinaCorpuscular = this.concentracionHemoglobinaCorpuscular.nativeElement.value;
    var indiceAnisocitosisRDW = this.indiceAnisocitosisRDW.nativeElement.value;
    var indiceAnisocitosisRDWSD = this.indiceAnisocitosisRDWSD.nativeElement.value;
    var leucocitosTotales = this.leucocitosTotales.nativeElement.value;
    var eosinofilosP = this.eosinofilosP.nativeElement.value;
    var basofilosP = this.basofilosP.nativeElement.value;
    var linfocitosP = this.linfocitosP.nativeElement.value;
    var monocitosP = this.monocitosP.nativeElement.value;
    var neutrofilosSegmentadosP = this.neutrofilosSegmentadosP.nativeElement.value;
    var bastonesP = this.bastonesP.nativeElement.value;
    var eosinofilosD = this.eosinofilosD.nativeElement.value;
    var basofilosD = this.basofilosD.nativeElement.value;
    var linfocitosD = this.linfocitosD.nativeElement.value;
    var monocitosD = this.monocitosD.nativeElement.value;
    var neutrofilosSegmentadosD = this.neutrofilosSegmentadosD.nativeElement.value;
    var bastonesD = this.bastonesD.nativeElement.value;
    var recuentoPlaqueta = this.recuentoPlaqueta.nativeElement.value;
    var volumenPlaquetarioMedio = this.volumenPlaquetarioMedio.nativeElement.value;

    if(hemoglobina == '' || hematocrito == '' || hematies == '' || volumenCorpuscularMedio == '' ||
    hemoglobinaCorpuscularMedia == '' || concentracionHemoglobinaCorpuscular == '' || indiceAnisocitosisRDW == '' || indiceAnisocitosisRDWSD == '' ||
    leucocitosTotales == '' || eosinofilosP == '' || basofilosP == '' || linfocitosP == '' || monocitosP == '' || neutrofilosSegmentadosP == '' || bastonesP == ''
    || eosinofilosD == '' || basofilosD == '' || linfocitosD == '' || monocitosD == '' || neutrofilosSegmentadosD == ''
    || bastonesD == '' || recuentoPlaqueta == '' || volumenPlaquetarioMedio == ''){
      alert("Complete todos los campos");
    }
    else {
      let pacienteId = parseFloat(this.PacienteId.toString());
      let a = parseFloat(hemoglobina);
      let b = parseFloat(hematocrito);
      let c = parseFloat(hematies);
      let d = parseFloat(volumenCorpuscularMedio);
      let e = parseFloat(hemoglobinaCorpuscularMedia);
      let f = parseFloat(concentracionHemoglobinaCorpuscular);
      let g = parseFloat(indiceAnisocitosisRDW);
      let h = parseFloat(indiceAnisocitosisRDWSD);
      let i = parseFloat(leucocitosTotales);
      let j = parseFloat(eosinofilosP);
      let k = parseFloat(basofilosP);
      let l = parseFloat(linfocitosP);
      let m = parseFloat(monocitosP);
      let n = parseFloat(neutrofilosSegmentadosP);
      let o = parseFloat(bastonesP);
      let p = parseFloat(eosinofilosD);
      let q = parseFloat(basofilosD);
      let r = parseFloat(linfocitosD);
      let s = parseFloat(monocitosD);
      let t = parseFloat(neutrofilosSegmentadosD);
      let u = parseFloat(bastonesD);
      let v = parseFloat(recuentoPlaqueta);
      let w = parseFloat(volumenPlaquetarioMedio);
     

      const sangrePerifericaNew = {pacienteId: pacienteId,
        hemoglobina: a,
        hematocrito: b,
        hematies: c,
        volumenCorpuscularMedio: d,
        hemoglobinaCorpuscularMedia: e,
        concentracionHemoglobinaCorpuscular: f,
        indiceAnisocitosisRDW: g,
        indiceAnisocitosisRDWSD: h,
        leucocitosTotales: i,
        eosinofilosP: j,
        basofilosP: k,
        linfocitosP: l,
        monocitosP: m,
        neutrofilosSegmentadosP: n,
        bastonesP: o,
        eosinofilosD: p,
        basofilosD: q,
        linfocitosD: r,
        monocitosD: s,
        neutrofilosSegmentadosD: t,
        bastonesD: u,
        recuentoPlaqueta: v,
        volumenPlaquetarioMedio: w,
      };

      this.sangrePerifericaService.addSangrePeriferica(sangrePerifericaNew).subscribe((response: any) => {
        this.router.navigate(['home/pediatra/',this.MedicoId]);
      });
    }
  }
}
