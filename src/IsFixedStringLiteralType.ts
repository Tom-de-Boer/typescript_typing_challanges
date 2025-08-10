type IsFixedStringLiteralType<S extends string> = 
  StringIsLiteralStringOrUnionOfLiteralStrings<S> extends true
    ? IsNotUnion<S>
    : false

type StringIsLiteralStringOrUnionOfLiteralStrings<S extends string> = 
  {} extends Record<S, unknown>
  ? false
  : true

type Test1 = StringIsLiteralStringOrUnionOfLiteralStrings<`123`| `234` | string>

type IsNotUnion<T, U = T> =
    T extends any
        ? [U] extends [T]
            ? true
            : false
        : never;