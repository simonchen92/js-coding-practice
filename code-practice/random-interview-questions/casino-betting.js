/**
When John gambles at the casino, he always uses a special system of tatics that he devised himself.
It's based on always betting in one of two ways in each game:

- betting exactly one chip (to test his luck)
- betting all-in (he bets everything he has)

Wins in the casino ar epaid equal to the wager, so if he bets C chips and wins,
he gets 2C chips back. If he loses, he doesn't get any chips back.

Task if to calculate the smallest possible number of rounds he could have played.

Note: betting just one chip is never considered playing all-in

Write a function that, given an interger N and an integer K, returns the minimum number
of rounds that are necessary for John to leave the casino with N chips, having played
all-in no more than K times.
 */

function solution(N, K) {
  let count = 0;
  while (N > 1) {
    if (K > 0) {
      N = N / 2;
      count++;
      K--;
    } else {
      N = N - 1;
      count++;
    }
  }
  return count;
}

console.log(solution(8, 0)); // 7
console.log(solution(18, 2)); // 6
console.log(solution(10, 10)); // 4
