
type Sum<A extends number, B extends number, AACC extends any[]=[], BACC extends any[]=[]> =
  AACC[`length`] extends A
    ? BACC[`length`] extends B
      ? [...AACC, ...BACC][`length`]
      : Sum<A, B, AACC, [...BACC, any]>
    : Sum<A, B, [...AACC, any], BACC>

type Test1Sum = Sum<4,6>

type RowFromPreviousRow<Row extends number[], Prev extends number = 0> = 
  Row extends [infer Head extends number]
    ? [Sum<Prev,Head>, Sum<Head, 0>]
    : Row extends [infer H1 extends number, infer H2 extends number, ...infer Rest extends number[]]
      ? [Sum<Prev, H1>, ...RowFromPreviousRow<[H2,...Rest], H1>]
      : never

type Test1AddFromRow = RowFromPreviousRow<[1,1]>

type AddToTriangle<Acc extends number[][]> = 
  Acc extends [...number[][], infer Last extends number[]]
  ? [...Acc, RowFromPreviousRow<Last>]
  : never


type Pascal<N extends number, Acc extends number[][]=[[1]]> = 
  N extends Acc[`length`]
    ? Acc
    : Pascal<N, AddToTriangle<Acc>> 

type Test1Pascal = Pascal<5>