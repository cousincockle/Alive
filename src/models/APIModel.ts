import { statusModel } from "./statusModel";


export class APIModel {
    public name: number
    public status: any = statusModel
    public url:String
    public refreshRate:number
    public icon:string

   


  constructor(_name,_status,_url,_refreshrate,_icon) {
    this.icon = _icon
    this.status = _status
    this.url = _url
    this.refreshRate = _refreshrate
    this.name = _name
  }


  

      
      
    

      
}
    
  

  