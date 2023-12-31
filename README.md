# bi-fraction

bi-fraction is a lightweight and efficient library for working with fraction numbers. Built on top of Native JavaScript BigInt, it provides a simple and reliable solution for handling fractions with arbitrary precision and magnitude.

[API Doc](https://logan272.github.io/bi-fraction/api/)

## Getting Started

```ts
import { Fraction } from 'bi-fraction';

const a = Fraction.parse('0.1');
const b = Fraction.parse('0.3');
const c = a.div(b);
const d = a.add(0.1);

c.eq(new Fraction(1, 3)); // true
d.eq(new Fraction(2, 10)); // true

const x = Fraction.parse('1234.5');
const y = Fraction.parse(1234.5);

// Fraction.toFixed(decimalPlaces?: number, roundingMode?: RoundingMode)
x.eq(y); // true
x.toFixed(0); // '1235'
x.toFixed(0, RoundingMode.ROUND_DOWN); // '1234'
y.toFixed(3); // '1234.500'

const z = x.mul(y); // 1523990.25

// Fraction.toSignificant(decimalPlaces?: number, roundingMode?: RoundingMode)
z.toSignificant(4); // '1524000'
z.toSignificant(4, RoundingMode.ROUND_DOWN); // '1523000'
z.toSignificant(9); // '1523990.25'
z.toSignificant(18); // '1523990.25'
z.toSignificant(100); // '1523990.25'

// Fraction.toFormat(decimalPlaces?: number, roundingMode?: RoundingMode, format?: Format)
z.toFormat(0); // '1,523,990';
z.toFormat(0, undefined, { groupSize: 4 }); // '152,3990'
z.toFormat(0, undefined, { groupSeparator: '_' }); // '1_523_990'
```
