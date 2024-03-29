import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { EntityRepository } from '../database/entity.repository';
import { User, UserDocument } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserRepository extends EntityRepository<UserDocument> {
  constructor(@InjectModel(User.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
