import { Module } from '@nestjs/common';
import { HubPricesModule } from './hub-prices/hub-prices.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
  imports: [
      HubPricesModule,
      ServeStaticModule.forRoot({
          rootPath: join(__dirname, '../..', 'client', 'build')
      })
  ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
