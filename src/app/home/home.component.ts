import { Component, OnInit } from '@angular/core';
import { APIModel } from 'src/models/APIModel';
import { statusModel } from 'src/models/statusModel';
const {ipcRenderer} = (<any>window).require("electron");
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  APIs: APIModel[] = []
  testAPI : APIModel
  test2 : APIModel
  url : string = 'https://mediadl-api.abelssoft.de/v1/gettop10?access_token=s&type=documentation'
  constructor() {
    this.testAPI = new APIModel('Mediathek',statusModel.alive,this.url,20,'/Users/Anouar/Documents/Sources/2018/MediaDownloader_CrossPlatform/src/assets/app-icon/icon-win.png')
    this.test2 = new APIModel('Xparser',statusModel.alive,this.url,20,'/Users/Anouar/Documents/Sources/2018/MediaDownloader_CrossPlatform/src/assets/app-icon/icon-win.png')

    this.APIs.push(this.testAPI,this.test2)
    console.dir(this.APIs)
   }

  ngOnInit() {
  } 

  quit(){
    ipcRenderer.send('quit')
  }
  
}
