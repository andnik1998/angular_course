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

    constructor() {
        setTimeout(() => {this.allowNewServer=true}, 2000);
    }
    onCreateServer() {
        this.serverCreationStatus = "Server was created! Name: " + this.serverName;
        this.serverName = '';
    }
    getServerStatus(){
        return this.serverStatus;
    }
}