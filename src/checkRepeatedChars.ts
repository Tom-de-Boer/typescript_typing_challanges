type CheckRepeatedChars<T extends string, Acc extends string=``> = 
  T extends  `${infer First}${infer Last}`
    ? Acc extends  `${infer _Before}${First}${infer _After}`
      ? true
      : CheckRepeatedChars<Last, `${Acc}${First}`>
    : false