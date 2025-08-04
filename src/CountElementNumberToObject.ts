type Flatten<T> = 
  T extends [infer Head, ...infer Tail]
    ? Head extends [infer _H2, ...infer _T2]
      ? [...Flatten<Head>, ...Flatten<Tail>]
      : [Head, ...Flatten<Tail>] 
    : []

type Test3 = Flatten<[1,2,4,[1,2,3]]>

type Increment<T extends number, Acc extends any[] = []> = 
  T extends Acc[`length`]
    ? [...Acc, any][`length`]
    : Increment<T, [...Acc, any]>

type Test2 = Increment<1>

type CountElementNumberToObject<T> = T extends [never] ? {} : CountElementNumberToObjectHelper<Flatten<T>>

type CountElementNumberToObjectHelper<T, Acc extends Record<PropertyKey, number>={}> = 
  T extends [infer Head extends PropertyKey, ...infer Tail extends PropertyKey[]]
    ?CountElementNumberToObjectHelper<Tail, {[Key in (Head | (keyof Acc)) ]: 
      Acc[Key] extends number 
        ? Key extends Head
          ? Increment<Acc[Key]>
          : Acc[Key] 
        : 1
    }>
    : Acc

type Test1 = CountElementNumberToObject<[1, 2, 3, 4, 5]>

type Test4 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>

type Test5 = CountElementNumberToObject<[never]>

type Test6 = never extends (string | number) ? true : false

type Test7 = [never] extends [never] ? true: false

type Test8 = Flatten<[never]>

type Test9<T> = [T] extends [never] ? true : false

type Test10 = Test9<never>