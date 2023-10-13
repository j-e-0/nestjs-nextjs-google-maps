import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
    constructor (private readonly placesServices: PlacesService) {}

    @Get()
    findPlace(@Query('text') text: string){
        return this.placesServices.findPlace(text);
    }
}
