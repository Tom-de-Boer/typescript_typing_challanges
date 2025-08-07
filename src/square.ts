import type { Equal, Expect } from '@type-challenges/utils'


type ToArray<N extends number, Item extends number | number[], Collector extends Item[] = []> =
  Equal<Collector[`length`], N> extends true
    ? Collector
    : Equal<`-${Collector[`length`]}`, `-${N}`> extends true
    ? Collector
    : ToArray<N, Item, [...Collector, Item]>

type ToArrayTest1 = ToArray<5, 1> 

type To2dArray<N extends number> = 
  ToArray<N, ToArray<N, 1>>

type To2dArrayTest = To2dArray<3>

type FlattenArray<Arr extends number[][]> = 
  Arr extends [infer H extends number[], ...infer T extends number[][]]
    ? [...H, ...FlattenArray<T>]
    : []

type FlattenArrayTest1 = FlattenArray<[[1], [1]]>

type FlattenArrayTest2 = FlattenArray<To2dArray<4>>[`length`]

type Square<N extends number> = 
  FlattenArray<To2dArray<N>>[`length`]

type SquareTest2 = Square<20>