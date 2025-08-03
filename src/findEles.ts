type ArrayContains<T extends any[], I extends any> = 
  T extends [infer Head, ...infer Tail]
    ? Equal<Head, I> extends true
      ? true
      : ArrayContains<Tail, I>
    : false

type FindEles<T extends any[], Before extends any[]=[]> = 
  T extends [infer Head, ...infer Tail]
    ? ArrayContains<[...Before, ...Tail], Head> extends true
      ? FindEles<Tail, [...Before, Head]>
      : [Head, ...FindEles<Tail, [...Before, Head]>]
    : []