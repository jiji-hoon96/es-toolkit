import { describe, expect, it } from 'vitest';
import { minBy } from './minBy';

describe('minBy', () => {
  it('minBy selects one min value in array', () => {
    const people = [
      { name: 'Mark', age: 30 },
      { name: 'Nunu', age: 20 },
      { name: 'Overmars', age: 35 },
    ];
    const result = minBy(people, person => person.age);
    expect(result).toEqual({ name: 'Nunu', age: 20 });
  });

  it('if there are two min values, first one is selected', () => {
    const people = [
      { name: 'Mark', age: 30 },
      { name: 'Nunu', age: 20 },
      { name: 'Overmars', age: 20 },
    ];
    const result = minBy(people, person => person.age);
    expect(result).toEqual({ name: 'Nunu', age: 20 });
  });

  it('if array is single-element, return unique element of array', () => {
    const people = [{ name: 'Mark', age: 25 }];
    const result = minBy(people, person => person.age);
    expect(result).toEqual({ name: 'Mark', age: 25 });
  });

  it('if array is empty, return undefined', () => {
    type Person = { name: string; age: number };
    const people: Person[] = [];
    const result = minBy(people, person => person.age);
    expect(result).toBeUndefined();
  });

  it('should handle arrays with NaN values correctly', () => {
    const numbers = [1, Number.NaN, 3, 2];
    const result = minBy(numbers, x => x);
    expect(result).toBe(1);
  });
});
