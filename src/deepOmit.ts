type DeepOmit<T, R extends string> = 
  R extends keyof T
    ? Omit<T, R>
    : R extends `${infer H extends string}.${infer Tail extends string}`
    ? H extends keyof T
    ? {
      [Key in keyof T]: Key extends H? DeepOmit<T[Key], Tail> : T[Key]
    }
    : T
    : T