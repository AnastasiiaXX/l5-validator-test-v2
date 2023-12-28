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

  maxDepth(max) {
    const validator = (array) => {
      // ф-я принимает текущий эл-т и глубину по умолчанию равную -1
      // если мы попали не в массив, а в сам элемент (первый тест)
      // 0 нельзя, т.к. далее, прибавив 1, получим уровень вложенности 1,
      // а вложенности в случае [1, 2, 3] нет
      const iter = (el, depth = -1) => {
        // базовый случай - не массив, возвращает глубину (первый тест -> -1)
        if (!Array.isArray(el)) {
          return depth;
        }
        // если след. элемент - массив, проходим мапом по нему, рекурсивно запускаем ф-ю iter
        // и увеличиваем глубину на 1
        const result = el.map((value) => iter(value, depth + 1));
        // возвращается (после мап) массив из чисел, обозначающих глубину
        // Math.max возвращает самое большое число (наибольший уровень вложенности)
        return Math.max(...result);
      };
      return iter(array) <= max;
    };
    this.validators.push(validator);
    return this;
  }
}
