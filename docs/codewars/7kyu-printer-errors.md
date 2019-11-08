# [7kyu] Printer Errors

191108 7kyu 문제 

::: tip Q
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

문자열이 a-m 사이가 아니면 오류로 판단하고 분자에는 오류 수, 분모에는 총 길이를 보여주란 문제로 이해됨.

```js
s="aaabbbbhaijjjm"
error_printer(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
error_printer(s) => "8/22"
```
:::

## answer
```js
function printerError(s) {
    const length = s.length;
    const errStart = "a".charCodeAt(0);
    const errEnd = "m".charCodeAt(0);
    let filtered = s.split('').filter(text => {
      let target = text.charCodeAt(0);
      return target >= errStart && target <= errEnd;
    });
    
    return `${length - filtered.length}/${length}`;
}
```
학교 다닐때 문자열 관련 문제는 아스키로 많이 풀었었는데, 그 기억이 나서 아스키로 풀었다.
다만, 풀고나서 생각해보니 정규식으로 해당 문자열만 걸러내는게 제일 깔끔할 것으로 보인다.

## other answer
```js
function printerError(s) {
  return `${s.replace(/[a-m]/ig, '').length}/${s.length}`;
}
```
