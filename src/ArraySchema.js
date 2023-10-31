export default class ArraySchema {
    validators = [(value) => Array.isArray(value)];

  isValid(value) {
    const checks = this.validators.map((validator) => validator(value));
    return !checks.includes(false);
  }

  length(number) {
    const validator = (value) => (value !== null ? value.length === number : false);
    this.validators.push(validator);
    return this;
  }
}
