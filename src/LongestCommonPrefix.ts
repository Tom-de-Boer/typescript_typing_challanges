type LongestCommonPrefixAmong2Strings<A extends string, B extends string> = 
  A extends `${infer AFirstChar}${infer ARestChar extends string}`
    ? B extends `${infer BFirstChar}${infer BRestChar extends string}`
      ? AFirstChar extends BFirstChar
        ? `${AFirstChar}${LongestCommonPrefixAmong2Strings<ARestChar, BRestChar>}`
        : ``      
      : ``
    : ``

type Test1LongestCommonPrefixAmong2Strings = LongestCommonPrefixAmong2Strings<`12345`, `12567`> 

type LongestCommonPrefix<T extends string[], P extends string = ''> = 
  T extends [infer H extends string, ...infer Rest extends string[]]
    ? Rest extends []
      ? H
      : LongestCommonPrefixAmong2Strings<H, LongestCommonPrefix<Rest>>
    : ``