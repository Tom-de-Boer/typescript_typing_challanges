
type RemoveFirstColumn<T extends any[][]> = 
  T extends [infer Head, ...infer Rest extends any[][]]
    ? Head extends [any, ...infer Rest2 extends any[]]
      ? [Rest2, ...RemoveFirstColumn<Rest>]
      : []
    : []

type Test1RemoveFirstColumn= RemoveFirstColumn<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>

type Trace<T extends any[][]> = 
  T extends [infer Head, ...infer Rest extends any[][]]
    ? Head extends [infer H2, ...any[]]
      ? H2 | Trace<RemoveFirstColumn<Rest>>
      : never 
    : never

type Test1Trace = Trace<[[0, 1, 1], [2, 0, 2], [3, 3, 0]]>