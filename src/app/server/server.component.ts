import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponent {
    serverId = 116;
    serverStatus = 'online';

    getServerStatus(){
        return this.serverStatus;
    }
}