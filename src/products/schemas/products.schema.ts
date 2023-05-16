import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Product {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  price: Number;

  @Prop({ required: true })
  thumbnail: string;
}

export type ProductDocument = HydratedDocument<Product>;

export const productSchema = SchemaFactory.createForClass(Product);
