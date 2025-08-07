type ToEmpty<Row extends number[]> = 
  Row extends [number, ...infer Tail extends number[]]
  ? [[], ...ToEmpty<Tail>]
  : []

type TestFirstComumn1 = ToEmpty<[1,2,3,4,5,6]>

type MergeColumnWithRow<Column extends number[][], Row extends number[]> = 
  Column extends [infer CoHead extends number[], ...infer Corest extends number[][]]
    ? Row extends [infer RoHead extends number, ...infer Rorest extends number[]]
    ? [[...CoHead, RoHead], ...MergeColumnWithRow<Corest, Rorest>]
    : never
    : Column

type testMergeColumnWithRow1 = MergeColumnWithRow<ToEmpty<[1,3,5]>,[2,4,6]> 


type Transpose<M extends number[][], Collector extends number [][] = []> = 
  M extends [infer FirstRow extends number[], ...infer RestRows extends number[][]]
  ? Collector extends []
  ? Transpose<RestRows, MergeColumnWithRow<ToEmpty<FirstRow>, FirstRow>>
  : Transpose<RestRows, MergeColumnWithRow<Collector, FirstRow>>
  : Collector

type TestTranspose1 = Transpose<[[1]]>