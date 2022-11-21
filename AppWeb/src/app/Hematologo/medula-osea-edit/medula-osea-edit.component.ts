import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SangrePeriferica} from "../../Shared/Interface/sangre-periferica";
import {PacienteService} from "../../Shared/Service/paciente.service";
import {MedicoService} from "../../Shared/Service/medico.service";
import {SangrePerifericaService} from "../../Shared/Service/sangre-periferica.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MedulaOsea} from "../../Shared/Interface/medula-osea";
import {MedulaOseaService} from "../../Shared/Service/medula-osea.service";

@Component({
  selector: 'app-medula-osea-edit',
  templateUrl: './medula-osea-edit.component.html',
  styleUrls: ['./medula-osea-edit.component.css']
})
export class MedulaOseaEditComponent implements OnInit {
  PacienteId!: number;
  MedicoId!: number;
  MedulaOseaId!: number;

  medulaOseaData: any;
  medulaOsea: MedulaOsea;

  @ViewChild("linfoblastoBPatologico") linfoblastoBPatologico! : ElementRef;
  @ViewChild("blastoMieloide") blastoMieloide! : ElementRef;
  @ViewChild("linfoblastoBNormal") linfoblastoBNormal! : ElementRef;
  @ViewChild("linfBMaduroElntorm") linfBMaduroElntorm! : ElementRef;
  @ViewChild("linfocitosTNK") linfocitosTNK! : ElementRef;
  @ViewChild("celMesenquimal") celMesenquimal! : ElementRef;
  @ViewChild("serieGranulocitoNeutrofilo") serieGranulocitoNeutrofilo! : ElementRef;
  @ViewChild("serieMonocitica") serieMonocitica! : ElementRef;
  @ViewChild("eosinofilo") eosinofilo! : ElementRef;
  @ViewChild("basofiloCD") basofiloCD! : ElementRef;
  @ViewChild("serieEritroide") serieEritroide! : ElementRef;
  @ViewChild("plasmocito") plasmocito! : ElementRef;
  @ViewChild("celularidad") celularidad! : ElementRef;

  constructor(private pacienteService: PacienteService,
              private medicoService : MedicoService,
              private medulaOseaService: MedulaOseaService,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    this.route.params.subscribe(params=>this.PacienteId= params['pacienteId'])
    this.route.params.subscribe(params=>this.MedulaOseaId= params['medulaOseaId'])
    this.medulaOsea = {} as MedulaOsea;
  }

  ngOnInit(): void {
    this.getReturnDataPacient();
  }

  getReturnDataPacient(){
    this.medulaOseaService.getAllMedulaOsea().subscribe(data=>{
      this.medulaOseaData = data;
      for (var i = 0; i < this.medulaOseaData.length; i++){
        if (this.PacienteId == this.medulaOseaData[i].pacienteId){
          this.medulaOseaService.getMedulaOseaById(this.medulaOseaData[i].id).subscribe(response => {
            this.medulaOsea = response;
          })
        }
      }
    })
  }

  Registrar():void{
    var linfoblastoBPatologico = this.linfoblastoBPatologico.nativeElement.value;
    var blastoMieloide = this.blastoMieloide.nativeElement.value;
    var linfoblastoBNormal = this.linfoblastoBNormal.nativeElement.value;
    var linfBMaduroElntorm = this.linfBMaduroElntorm.nativeElement.value;
    var linfocitosTNK = this.linfocitosTNK.nativeElement.value;
    var celMesenquimal = this.celMesenquimal.nativeElement.value;
    var serieGranulocitoNeutrofilo = this.serieGranulocitoNeutrofilo.nativeElement.value;
    var serieMonocitica = this.serieMonocitica.nativeElement.value;
    var eosinofilo = this.eosinofilo.nativeElement.value;
    var basofiloCD = this.basofiloCD.nativeElement.value;
    var serieEritroide = this.serieEritroide.nativeElement.value;
    var plasmocito = this.plasmocito.nativeElement.value;
    var celularidad = this.celularidad.nativeElement.value;

    if(linfoblastoBPatologico == '' || blastoMieloide == '' || linfoblastoBNormal == '' || linfBMaduroElntorm == '' ||
      linfocitosTNK == '' || celMesenquimal == '' || serieGranulocitoNeutrofilo == '' || serieMonocitica == '' ||
      eosinofilo == '' || basofiloCD == '' || serieEritroide == '' || plasmocito == '' || celularidad == ''){
      alert("Complete todos los campos");
    }
    else {
      let a = parseFloat(linfoblastoBPatologico);
      let b = parseFloat(blastoMieloide);
      let c = parseFloat(linfoblastoBNormal);
      let d = parseFloat(linfBMaduroElntorm);
      let e = parseFloat(linfocitosTNK);
      let f = parseFloat(celMesenquimal);
      let g = parseFloat(serieGranulocitoNeutrofilo);
      let h = parseFloat(serieMonocitica);
      let i = parseFloat(eosinofilo);
      let j = parseFloat(basofiloCD);
      let k = parseFloat(serieEritroide);
      let l = parseFloat(plasmocito);
      let m = parseFloat(celularidad);
      let pacienteId = parseFloat(this.PacienteId.toString());

      const medulaOseaNew = {pacienteId: pacienteId,
        linfoblastoBPatologico: a,
        blastoMieloide: b,
        linfoblastoBNormal: c,
        linfBMaduroElntorm: d,
        linfocitosTNK: e,
        celMesenquimal: f,
        serieGranulocitoNeutrofilo: g,
        serieMonocitica: h,
        eosinofilo: i,
        basofiloCD: j,
        serieEritroide: k,
        plasmocito: l,
        celularidad: m
      };

      this.medulaOseaService.updateMedulaOsea(this.MedulaOseaId,medulaOseaNew).subscribe((response: any) => {
        this.router.navigate(['home/hematologo/',this.MedicoId]);
      });
    }
  }
}
