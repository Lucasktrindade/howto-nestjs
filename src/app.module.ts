import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypesController } from './types/types.controller';
import { OrdersController } from './orders/orders.controller';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb://spdif:spidf123@ds125684.mlab.com:25684/store-whitelabel')],
  controllers: [TypesController, OrdersController]
})
export class AppModule {}
