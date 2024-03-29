import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Types } from 'mongoose';
import { Category } from '../../category/entities/category.entity';

// @Schema()
// export class Comment {
//   @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
//   user: Types.ObjectId;

//   @Prop({ required: true })
//   comment: string;
// }

@Schema({ timestamps: true })
export class Post {
  _id?: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  materials: string;

  @Prop({ required: true })
  process: string;

  @Prop({ type: [String] })
  tags: string[];

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  })
  category: Category;

  @Prop({ required: true })
  imageUrl: string;
}
// @Prop({ type: [Comment] })
// comments?: Comment[];

export type PostDocument = HydratedDocument<Post>;
export const PostSchema = SchemaFactory.createForClass(Post);
