import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrl: './server.component.css'
  })


export class ServerComponent{

  serverId: number = 10;
  ServerStatus: string ='online';
  server:string ='Greek Server';

constructor(){

 this.ServerStatus =Math.random() > 0.5 ? 'online' : 'offline';
}



getServerStatus(){
  return this.ServerStatus
}

getColour(){
return this.ServerStatus === 'online' ? 'Green' : 'red'


}


}

