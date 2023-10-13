import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class RoutesService {

  constructor(private PrismaService: PrismaService){}

  create(createRouteDto: CreateRouteDto) {
    return this.PrismaService.route.create({
      data: {
        name: createRouteDto.name,
        source: {
          name: 'nome origem',
          location:{
            lat: 0,
            lng: 0
          }
        },
        destination: {
          name: 'nome destino',
          location:{
            lat: 0,
            lng: 0
          }
        },
        distance: 0,
        duration: 0,
        directions: '{}'
      }
    })
  }

  findAll() {
    return this.PrismaService.route.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} route`;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return `This action updates a #${id} route`;
  }

  remove(id: number) {
    return `This action removes a #${id} route`;
  }
}
