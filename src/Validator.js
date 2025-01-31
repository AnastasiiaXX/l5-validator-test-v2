/* eslint-disable class-methods-use-this */
import StringSchema from './StringSchema.js';
import ArraySchema from './ArraySchema.js';
import ObjectSchema from './ObjectSchema.js';

export default class Validator {
  string() {
    return new StringSchema([(value) => typeof value === 'string']);
  }

  array() {
    return new ArraySchema();
  }

  object() {
    return new ObjectSchema();
  }
}
