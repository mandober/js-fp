// c++ 11 std

#pragma region h
#include <stdio.h>
#include <iostream>
#include <vector>
#include <functional>
#include <numeric>
#include <algorithm>
#include <string>
#include <tuple>
#include <any>
using namespace std;

function<int (int)> 
comp(function<int (int)> f, function<int (int)> g) 
{
  // lambda = [&,cap|=,cap&](T1 arg1,...){ return expr; };
  // [=] all captures by value
  // [&] all captures by ref
  // [=, &g] all captures by value, g by ref
  // [&, g] all captures by ref, g by value
  return [g, f](int x){ return g(f(x)); };
}

int f(int a_arg) { return 5 + a_arg; }
int g(int b_arg) { return 2 * b_arg; }

#pragma endregion


// declare 3 type params: a b
template<typename a, typename b> // declare 2 type params
typename b::value_type           // state func's return type. is b value/ref type?
h                              // func name
(
  typename a::value_type x    // param1. is a value/ref type?
){ 
  return 5 + x; 
}

template<typename a, typename b> // declare 2 type params
function<b (a)>      // g.f :: (a -> c)
composition(
  function<b (a)> f, //   f :: (a -> b)
  function<b (a)> g  //   g :: (b -> c)
){
  return [=](a param) { return g(f(param)); };
}

#pragma region main

int main() {
  auto r = composition(h,h)(5)
  cout << "generic composition: " << r << "\n";


  int res = comp(f, g)(5);
  cout << "composition: " << res << "\n";

  #pragma region try
  vector<int> 
  vec {1, 2, 3, 4, 5, 6, 7, 8, 9};
  int sum = std::accumulate(vec.begin(), vec.end(), 0);
  cout << "vec sum: " << sum << "\n";

  auto it = remove_if(
    vec.begin(), vec.end (),
    [](int i){ return ((i <3) or (i> 8)); }
  );  
  
  accumulate(
    vec.begin(), 
    vec.end(), 
    1,  
    [](int a, int b){ return a*b; }
  );
  #pragma endregion
}
#pragma endregion

#pragma region Misc

template<typename Range, typename Accum> // init generic types
typename Range::value_type  // return type
foldl(
  const Range &items, 
  const typename Range::value_type &initial, 
  Accum f
){
    typename Range::value_type accum = initial;
    for(const auto &val : items) {
        accum = f(accum, val);
    }
    return accum;
}

/*  
    std::vector<int> arr;
    arr.assign(8, 2);

    std::function<int(int,int)> 
    f = [] (int x, int y) -> int 
    { return x * y; };

    std::foldl(f, 1, arr); */

    // map
    /*
    std::transform(
      vec.begin(), 
      vec.end(), 
      vec.begin(),
      [](int i){ return i*i; }
    );

    std::transform(
      str.begin(), 
      str.end(),
      std::back_inserter(vec2),
      // lambda: []
      [](std::string s){ return s.length (); }
    );


*/

#pragma endregion
