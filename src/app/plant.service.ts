import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Plant } from './plant';
import { PLANTS } from './all_plants';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
 
  constructor() { }
  getPlants(): Observable<Plant[]> {
    return of(PLANTS.slice(1,200));
  }

  plantFamily(family): Observable<Plant[]>{

    return of(PLANTS.filter(obj => {
      return obj.family === family
    }))
  }
}
