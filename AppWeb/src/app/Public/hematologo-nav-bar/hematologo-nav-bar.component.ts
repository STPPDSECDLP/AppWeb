import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hematologo-nav-bar',
  templateUrl: './hematologo-nav-bar.component.html',
  styleUrls: ['./hematologo-nav-bar.component.css']
})
export class HematologoNavBarComponent implements OnInit {
  MedicoId!: number;

  constructor(private router: Router,
    private route: ActivatedRoute) { 
      this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
    }

  ngOnInit(): void {
  }

}
