type Combination<T extends string[], U extends string = T[number],  UU extends string=U> =
  U extends (string)
    ? `${U}` | `${U} ${Combination<[],Exclude<UU, U>> }`
    : never