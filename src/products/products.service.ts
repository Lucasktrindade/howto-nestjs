import { Model } from 'mongoose'
import { Injectable } from '@nestjs/common';
import { Product } from './interfaces/product.interface'
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

    private readonly products: Product[] = [];

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const createdProduct = new this.productModel(createProductDto)
        return await createdProduct.save()
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec()
    }
}
