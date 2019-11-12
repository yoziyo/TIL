# [7kyu] Categorize New Member

191112 7kyu 문제 

::: tip Q
The Western Suburbs Croquet Club has two categories of membership, 
Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. 
Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Example Input
```js
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
```
Output

Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.


Example Output
```js
["Open", "Open", "Senior", "Open", "Open", "Senior"]
```

나이가 55세 이상이고, 핸디캡 등급이 7초과 이면 Senior, 아니면 Open을 보여주는 문제
:::

## answer
```js
function openOrSenior(data){
  let res = [];
  data.forEach((member) => {
    res.push(membershipCheck(member));
  })
  return res;
}

function membershipCheck(member) {
  if(member[0] >= 55 && member[1] > 7) {
    return 'Senior';
  }else{
    return 'Open';
  }
}
```
당연하게 함수로 빼고 작업 했지만, 이 문제는 map으로 만드는게 어떨까 싶다.

map은 해당 Array 를 반복하면서 (여기 까진 foreach와 동일) 데이터를 처리하고 반환하는데

반환 하는 데이터는 각각의 배열에 넣어서 반환한다.

## other answer
```js
function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}
```
