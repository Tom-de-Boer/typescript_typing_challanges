type IsOdd<T extends number> = 
  `${T}` extends `${string}.${string}`
  ? false
  : `${T}` extends `${string}${1|3|5|7|9}e0`
  ? true
  : `${T}` extends `${string}e${string}`
  ? false
  :`${T}` extends `${string}${1|3|5|7|9}`? true : false