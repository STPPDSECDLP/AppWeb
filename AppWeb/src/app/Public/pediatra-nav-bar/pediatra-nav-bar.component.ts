import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pediatra-nav-bar',
  templateUrl: './pediatra-nav-bar.component.html',
  styleUrls: ['./pediatra-nav-bar.component.css']
})
export class PediatraNavBarComponent implements OnInit {
  MedicoId!: number;

  constructor(private router: Router,
              private route: ActivatedRoute) { 
                this.route.params.subscribe(params=>this.MedicoId= params['medicoId'])
              }

  ngOnInit(): void {
  }

}
