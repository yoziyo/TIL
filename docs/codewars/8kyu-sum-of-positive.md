# [8kyu] Sum of positive

191107 8kyu 문제 

::: tip Q
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

숫자 배열을 얻고 모든 양수의 합을 반환합니다.

예 [1, -4,7,12] => 1 + 7 + 12 = 20

참고 : 합계가없는 경우 합계는 기본적으로 0입니다.
:::

## answer
```js
function positiveSum(arr) {
  let sum = 0;
  
  arr.forEach( (value) => {
    if (value > 0) sum += value;
  });
  
  return sum;
}
```
제일 기본적인 코드들 만 사용해서 반복 및 처리 하였다.

하지만 다른 답을 봤을때 reduce 를 사용하는 것이 좋아서, 사용에 부담을 줄여야 할 것 같다.

## other answer
```js
// reduce
const arr = [1,2,3,4,5];
const reduce = arr.reduce((acc, value) => acc + (value > 0 ? value : 0),0);
```
