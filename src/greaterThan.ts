/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type StringSameLength<T extends String, U extends string> =
  T extends `${infer _}${infer Tail}`
    ? U extends `${infer _}${infer TailU}`
      ? StringSameLength<Tail, TailU>
      : false
    : U extends ``
      ? true
      : false

// assume strings cannot be equal length as previously verified by StringSameLength
type StringLonger<T extends string, U extends string> =
  U extends `${infer _}${ infer TailU}`
    ? T extends `${infer _}${infer TailT}`
      ? StringLonger<TailT, TailU> 
      : false
    : true

type T1 = StringLonger<`10`, `9`>

type SingleNumberCompare<T extends string, U extends string> = 
  T extends `9`
  ? U extends `8` | `7` | `6` | `5` | `4` | `3` | `2` | `1` | `0`
    ? true
    : false
  : T extends `8`
  ? U extends `7` | `6` | `5` | `4` | `3` | `2` | `1` | `0`
    ? true
    : false
  : T extends `7`
  ? U extends `6` | `5` | `4` | `3` | `2` | `1` | `0`
    ? true
    : false
  : T extends `6`
  ? U extends `5` | `4` | `3` | `2` | `1` | `0`
    ? true
    : false
  : T extends `5`
  ? U extends `4` | `3` | `2` | `1` | `0`
    ? true
    : false
  : T extends `4`
  ? U extends `3` | `2` | `1` | `0`
    ? true
    : false
  : T extends `3`
  ? U extends `2` | `1` | `0`
    ? true
    : false
  : T extends `2`
  ? U extends `1` | `0`
    ? true
    : false
  : T extends `1`
  ? U extends `0`
    ? true
    : false
  : false

type GreaterStringEqualLengthCompare<T extends string, U extends string> = 
  T extends `${infer HeadT}${infer TailT}`
    ? U extends `${infer HeadU}${infer TailU}`
      ? HeadT extends HeadU
        ? GreaterStringEqualLengthCompare<TailT, TailU>
        : SingleNumberCompare<HeadT, HeadU>
      : never
    : false

type GreaterThan<T extends  number, U extends number> = 
  StringSameLength<`${T}`, `${U}`> extends true
    ? GreaterStringEqualLengthCompare<`${T}`, `${U}`>
    : StringLonger<`${T}`, `${U}`>

type T2 = StringSameLength<`10`, `100`> 

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891012>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
