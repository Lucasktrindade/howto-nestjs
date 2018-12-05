import { Controller, Get, Post, Body } from '@nestjs/common';
import { Product } from './interfaces/product.interface';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto'

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {}

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }
    
    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }
}
