import { Component, OnInit } from '@angular/core';
const {ipcRenderer} = (<any>window).require("electron");


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  } 

  quit(){
    ipcRenderer.send('quit')
  }
  
}
