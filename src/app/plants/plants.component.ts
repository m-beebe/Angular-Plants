import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';
import { PLANTS } from '../all_plants';


@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  selectedPlant: Plant;
  plants: Plant[]
  famNav: Array<any>;
  
  
  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants();
  }

  onSelect(plant: Plant): void {
    this.selectedPlant = plant;
  }

  getPlants(): void {
    this.plantService.getPlants()
        .subscribe(plants => this.plants = plants);
    this.plantService.getPlants()
        .subscribe(plants => this.famNav = PLANTS.map(function(a) {return a.family;}).filter((item, i, ar) => ar.indexOf(item) === i).sort());
  }

  searchFamilies(family){
    console.log("selected source is: "+family);
    this.plantService.plantFamily(family).subscribe(data => this.plants = data);
  }

}
