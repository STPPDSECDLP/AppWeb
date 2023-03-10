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

  @ViewChild("linfoblastoBPatologico") linfoblastoBPatologico! : ElementRef;
  @ViewChild("blastoMieloide") blastoMieloide! : ElementRef;
  @ViewChild("linfoblastoBNormal") linfoblastoBNormal! : ElementRef;
  @ViewChild("linfBMaduroEInterm") linfBMaduroEInterm! : ElementRef;
  @ViewChild("linfocitosT") linfocitosT! : ElementRef;
  @ViewChild("celulasNK") celulasNK! : ElementRef;
  @ViewChild("serieGranulocitoNeutrofilo") serieGranulocitoNeutrofilo! : ElementRef;
  @ViewChild("serieMonocitica") serieMonocitica! : ElementRef;
  @ViewChild("eosinofilo") eosinofilo! : ElementRef;
  @ViewChild("basofiloCD") basofiloCD! : ElementRef;
  @ViewChild("serieEritroide") serieEritroide! : ElementRef;
  @ViewChild("plasmocito") plasmocito! : ElementRef;
  @ViewChild("celularidad") celularidad! : ElementRef;

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
    var linfoblastoBPatologico = this.linfoblastoBPatologico.nativeElement.value;
    var blastoMieloide = this.blastoMieloide.nativeElement.value;
    var linfoblastoBNormal = this.linfoblastoBNormal.nativeElement.value;
    var linfBMaduroEInterm = this.linfBMaduroEInterm.nativeElement.value;
    var linfocitosT = this.linfocitosT.nativeElement.value;
    var celulasNK = this.celulasNK.nativeElement.value;
    var serieGranulocitoNeutrofilo = this.serieGranulocitoNeutrofilo.nativeElement.value;
    var serieMonocitica = this.serieMonocitica.nativeElement.value;
    var eosinofilo = this.eosinofilo.nativeElement.value;
    var basofiloCD = this.basofiloCD.nativeElement.value;
    var serieEritroide = this.serieEritroide.nativeElement.value;
    var plasmocito = this.plasmocito.nativeElement.value;
    var celularidad = this.celularidad.nativeElement.value;

    if(linfoblastoBPatologico == '' || blastoMieloide == '' || linfoblastoBNormal == '' || linfBMaduroEInterm == '' ||
      linfocitosT == '' || celulasNK == '' || serieGranulocitoNeutrofilo == '' || serieMonocitica == '' ||
      eosinofilo == '' || basofiloCD == '' || serieEritroide == '' || plasmocito == '' || celularidad == ''){
      alert("Complete todos los campos");
    }
    else {
      let a = parseFloat(linfoblastoBPatologico);
      let b = parseFloat(blastoMieloide);
      let c = parseFloat(linfoblastoBNormal);
      let d = parseFloat(linfBMaduroEInterm);
      let e = parseFloat(linfocitosT);
      let f = parseFloat(celulasNK);
      let g = parseFloat(serieGranulocitoNeutrofilo);
      let h = parseFloat(serieMonocitica);
      let i = parseFloat(eosinofilo);
      let j = parseFloat(basofiloCD);
      let k = parseFloat(serieEritroide);
      let l = parseFloat(plasmocito);
      let m = parseFloat(celularidad);
      let pacienteId = parseFloat(this.PacienteId.toString());

      const sangrePerifericaNew = {pacienteId: pacienteId,
        linfoblastoBPatologico: a,
        blastoMieloide: b,
        linfoblastoBNormal: c,
        linfBMaduroEinterm: d,
        linfocitosT: e,
        celulasNK: f,
        serieGranulocitoNeutrofilo: g,
        serieMonocritica: h,
        eosinofilo: i,
        basofiloCD: j,
        serieEritroide: k,
        plasmocito: l,
        celularidad: m
      };

      this.sangrePerifericaService.addSangrePeriferica(sangrePerifericaNew).subscribe((response: any) => {
        this.router.navigate(['home/hematologo/',this.MedicoId]);
      });
    }
  }
}
