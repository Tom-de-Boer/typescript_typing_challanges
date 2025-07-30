type NumberRange<L, H, Range extends number[]=[], All extends number[]=[] > = 
  All[`length`] extends H
    ? [...Range, All[`length`]][number]
    : L extends [...All, All[`length`]][number]
      ? NumberRange<L, H, [...Range, All[`length`] ], [...All, All[`length`] ]>
      : NumberRange<L, H, Range, [...All, All[`length`]]>

type Test1 = NumberRange<2, 9>