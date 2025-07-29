type Includes<T extends any[], U extends any> =
  T extends [infer Head, ...infer Tail]
    ? Equal<Head, U> extends true
      ? true
      : Includes<Tail, U>
    : false

type Unique<T, Existing extends any[] = []> = 
  T extends [infer Head, ...infer Tail]
    ? Includes<Existing, Head> extends true
      ? Unique<Tail, Existing>
      : Unique<Tail, [...Existing, Head]>
    : Existing