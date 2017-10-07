import { Injectable } from '@angular/core';


@Injectable()
export class globalService {
    public cameraRunning: boolean = false;
    constructor() { }


    public getCameraRunning() {
        return this.cameraRunning
    }
    public setCameraRunning(val:boolean) {
        this.cameraRunning = val;
    }

}

