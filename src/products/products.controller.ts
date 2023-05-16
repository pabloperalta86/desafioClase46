import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ConfigService } from '@nestjs/config';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private config: ConfigService,
  ) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    try {
      const productCreated = await this.productsService.create(createProductDto);
      return { status: 'success', data: productCreated };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Get()
  async findAll() {
    try {
      const products = await this.productsService.findAll();
      return { status: 'success', data: products };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const product = await this.productsService.findOne(id);
      return { status: 'success', data: product };    
    }catch(error){
      return { status: 'error', message: error.message };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    await this.productsService.update(id, updateProductDto);
    return { status: 'success', message: 'usuario actualizado' };
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      await this.productsService.remove(id);
      return { status: 'success', message: 'usuario eliminado' };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }
}