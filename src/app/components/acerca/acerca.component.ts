import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  name = 'Perrotta Vicente';
  iam =' Full Stack Developer';
    public persona:any
  constructor() { }

  ngOnInit(): void {
  }

}
