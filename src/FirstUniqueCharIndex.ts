type ContainsCharDouble<Str extends string, Char extends string> = 
  Str extends `${infer _Whatever1}${Char}${infer _Whatever2}${Char}${infer _Whatever3}`
    ? true
    : false


type FirstUniqueCharIndex<T extends string, Rest extends string = T, Acc extends any[]=[]> = 
  Rest extends `${infer Head}${infer Tail extends string}`
    ? ContainsCharDouble<T, Head> extends false
      ? Acc[`length`]
      : FirstUniqueCharIndex<T, Tail, [...Acc, any]>
    : -1