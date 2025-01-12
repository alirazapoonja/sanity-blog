import { type SchemaTypeDefinition } from 'sanity'
import product from './product';
import {post} from '../post';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, post],
}




