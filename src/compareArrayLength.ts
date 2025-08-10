// does only work if arrays do not have equal length !
type ArrayALargerThanB<A extends any[], B extends any[]> = 
  A extends [any, ...infer Rest]
    ? B extends [any, ...infer RestB]
      ? ArrayALargerThanB<Rest, RestB>
      : true
    : false

type CompareArrayLength<T extends any[], U extends any[]> = 
  T[`length`] extends U[`length`]
    ? 0
    : ArrayALargerThanB<T, U> extends true
      ? 1
      : -1 
