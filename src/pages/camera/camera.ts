import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { CameraPreview, CameraPreviewRect } from 'ionic-native';
import { NavController, Platform } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { globalService } from '../../services/globalService';

/*
  Generated class for the Camera page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'camera.html'
})

export class CameraPage implements OnInit, OnDestroy {

  cameraData: string;
  photoTaken: boolean;
  cameraRunning: boolean = false;
  image: Object = {
    original: '',
    preview: ''
  }

  constructor(
    private _el: ElementRef,
    private _DomSanitizationService: DomSanitizer,
    private navCtrl: NavController,
    private platform: Platform,
    private _gs: globalService) {
    console.log('start camera');
    console.log(this._el);

  }
  ngOnInit() {
   this._gs.setCameraRunning(false);
  }
  stopCamera() {
    CameraPreview.stopCamera();
    this.cameraRunning = false;
    this._gs.setCameraRunning(false);
  }
  switchCamera() {
    CameraPreview.switchCamera();
  }
  openCamera() {
    this._gs.setCameraRunning(true);
    this.cameraRunning = true;
    let cameraRect: CameraPreviewRect = {
      x: 0,
      y: 125,
      width: this.platform.width(),
      height: 200
    };


    let tapEnabled: any = false;
    let dragEnabled: any = true;
    let toBack: any = true;
    let alpha = 1;

    CameraPreview.startCamera(
      cameraRect, // position and size of preview
      'front', // default camera
      tapEnabled, // tap to take picture
      dragEnabled, // disable drag
      toBack, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
      alpha // set the preview alpha
    );
    /*CameraPreview.startCamera(
      cameraRect, // position and size of preview
      'front', // default camera
      true, // tap to take picture
      false, // disable drag
      false, // keep preview in front. Set to true (back of the screen) to apply overlaying elements
      1 // set the preview alpha
    );*/
    CameraPreview.setOnPictureTakenHandler().subscribe((result) => {
      console.log(result);
      this.image = {
        original: result[0],
        preview: result[1]
      }
      // do something with the result
    });


  }
  takePicture() {
    CameraPreview.takePicture({ maxWidth: 640, maxHeight: 640 });
  }


  ngOnDestroy() {
    console.log('ngOnDestroy')
  }
  refresh() {
    window['location'].reload();
  }



}
