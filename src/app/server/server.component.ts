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
        setTimeout(() => {this.allowNewServer=true}, 2000);
    }
    onCreateServer() {
        this.serverCreated = true;
        this.serverCreationStatus = "Server was created! Name: " + this.serverName;
    }
    getServerStatus(){
        return this.serverStatus;
    }
}