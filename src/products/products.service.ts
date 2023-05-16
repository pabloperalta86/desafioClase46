import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schemas/products.schema';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productsModel: Model<ProductDocument>,
  ) {}

  create(createproductDto: CreateProductDto) {
    return this.productsModel.create(createproductDto);
  }

  findAll() {
    return this.productsModel.find();
  }

  findOne(id: string) {
    return this.productsModel.findById(id) 
  }

  update(id: string, updateproductDto: UpdateProductDto) {
    return this.productsModel.findByIdAndUpdate(id, updateproductDto)
  }

  remove(id: string) {
    return this.productsModel.findByIdAndDelete(id);
  }
}
