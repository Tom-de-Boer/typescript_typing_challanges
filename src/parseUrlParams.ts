type ParseUrlParams<T extends string> = 
  T extends `${infer _Start}:${infer Part}/${infer Rest}`
    ? Part | ParseUrlParams<Rest>
    : T extends `${infer _Start}:${infer LastPart}`
      ? LastPart
      : never