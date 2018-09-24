import { Component, ViewChild } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'google-maps',
  templateUrl: 'google-maps.html'
})
export class GoogleMapsComponent {

  @ViewChild("map") mapElement;  
  map: any;
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('missoes').valueChanges();
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){

    let coords =new google.maps.LatLng(-15.832597,-48.054728);
    let mapOptions: google.maps.MapOptions ={
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    
   var map = this.map = new google.maps.Map(this.mapElement.nativeElement,
      mapOptions)
  
      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: -15.843233, lng: -48.049374},
          map: this.map,
          icon: image
        });

        var infowindow = new google.maps.InfoWindow({
          content: this.items[1],
          maxWidth: 200
        });
        beachMarker.addListener('click', function() {
          infowindow.open(map, beachMarker);
        });
      
  }
}
