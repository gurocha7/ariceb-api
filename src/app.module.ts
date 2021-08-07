import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule } from './clients/clients.module';
import { BuildingsModule } from './buildings/buildings.module';
import { SectorModule } from './sectors/sector.module';
import typeOrmConfig from './config/typeorm.config';
import { SubsectorModule } from './subsectors/subsector.module';
import { PlaceModule } from './places/place.module';
import { PlacesTypeModule } from './placesType/placesType.module';
import { MapsServiceModule } from './maps-service/maps-service.module';
import { InternalRouteModule } from './internal-routes/internal-routes.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeOrmConfig'),
    }),
    ClientsModule,
    BuildingsModule,
    SectorModule,
    SubsectorModule,
    PlaceModule,
    PlacesTypeModule,
    MapsServiceModule,
    InternalRouteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
