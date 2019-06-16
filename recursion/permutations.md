# Permutations

- The number of ways to order 0 things: 0! = 1 (there, ta-da!)
- The number of ways to order a card deck: `n!` i.e. 52!
- The number of ways to pick 5 cards from a deck: `n!/(n-k)!`
- The number of ways to arrange 5 persons in 3 seats: `n!/(n-k)!`
  i.e. `5!/(5-3)! = 60`



      n!         n!
n! , ------ , --------
     (n-k)!   k*(n-k)!



*n choose k* the number of ways to select k things out of n things
if (n = k) n!

(n:k) = (5:3) =

5!        5*4*3 * 2!
------ = ------------ = 5*4*3 = 60
(5-3)!            2!


5!       5*4 * 3 * 2!
------ = ------------ = 5*4 = 20
3*(5-3)!       3 * 2!

(52:5) = 52! / 47!