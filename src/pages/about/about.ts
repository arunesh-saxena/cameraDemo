import {Component, OnDestroy} from '@angular/core';
import {Camera, Screenshot} from 'ionic-native';
import {NavController} from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnDestroy{

  cameraData: string;
  photoTaken: boolean;
  cameraUrl: string;
  photoSelected: boolean;

  constructor(private _DomSanitizationService: DomSanitizer, private navCtrl: NavController) {
    this.photoTaken = false;
    console.log('start')
  }

 selectFromGallery() {
    var options = {
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: Camera.DestinationType.FILE_URI
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraUrl = imageData;
      this.photoSelected = true;
      this.photoTaken = false;
    }, (err) => {
      // Handle error
    });
  }

  openCamera() {
    var options = {
      sourceType: Camera.PictureSourceType.CAMERA,
      destinationType: Camera.DestinationType.DATA_URL,
      allowEdit: false
    };
    Camera.getPicture(options).then((imageData) => {
      this.cameraData = 'data:image/jpeg;base64,' + imageData;
      this.photoTaken = true;
      this.photoSelected = false;
    }, (err) => {
      // Handle error
    });
  }

  screeShort(){
    Screenshot.save('jpg', 80, 'myscreenshot.jpg').then((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });

  }
  ngOnDestroy() {
    console.log(111)
  }

}
