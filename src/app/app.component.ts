import { Component } from '@angular/core';
import { PLANTS } from './all_plants';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'plantdb';
  plants = PLANTS.map(function(a) {return a.family;}).filter((item, i, ar) => ar.indexOf(item) === i).sort();

  searchPlants(plant){
    console.log('selected: '+plant)
    // this.plantService.plantFamily(plant)
    //     .subscribe(plants => this.plants = plants);
  }
  
}
