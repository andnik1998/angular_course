import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 116;
    serverStatus = 'online';
    allowNewServer = false;
    serverCreationStatus = "No server was created!";
    serverName = '';
    serverCreated= false;

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
        var round = Math.round;
        var randnum = Math.random() * 1000;
        this.serverId = round(randnum);
    }
    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = "Server was created! Name: " + this.serverName;
    }
    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}