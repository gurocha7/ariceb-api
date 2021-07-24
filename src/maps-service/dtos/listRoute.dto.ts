import { Route } from "../maps-service.entity";
import { Building } from "src/buildings/buildings.entity";

export class ListRouteDTO{
    buildingOrigin: Building;
    buildingDestiny: Building;
}