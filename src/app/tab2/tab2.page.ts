import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  Environment
} from '@ionic-native/google-maps';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation/ngx';
import { Component } from '@angular/core';

const config: BackgroundGeolocationConfig = {
  desiredAccuracy: 10,
  stationaryRadius: 20,
  distanceFilter: 30,
  debug: true, //  enable this hear sounds for background-geolocation life-cycle.
  stopOnTerminate: false, // enable this to clear background location settings when the app terminates
};

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  map: GoogleMap;
  constructor(private backgroundGeolocation: BackgroundGeolocation) {
    this.loadMap();
  }

  loadMap() {

    this.backgroundGeolocation.getCurrentLocation().then((location) => {

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: location.latitude,
            lng: location.longitude
          },
          zoom: 18,
          tilt: 30
        }
      };
      this.map = GoogleMaps.create('map', mapOptions);
    }).catch((error)=>{
      console.log(error);
    });

  }

}
