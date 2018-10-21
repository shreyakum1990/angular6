import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-basics',
  templateUrl: './the-basics.component.html',
  styleUrls: ['./the-basics.component.css']
})
export class TheBasicsComponent implements OnInit {
  serverId : number = 10;
  serverStatus : string = 'offline';
  serverCreationStatus = 'No server was created!'

  allowNewServer = false;

  serverName = 'Testserver';
  serverCreated = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is' +  this.serverName;
  }

  onUpdateServerName(event:Event){
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
