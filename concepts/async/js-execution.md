# JS engines and async code


* Browser
  * Browser environment: globals and WebAPIs
  * JS engine
    * Call Stack
    * Global Memory (the heap)
    * Glovabal Execution Context
    * Local Execution Contexts (possibly nested)
  * Browser APIs
    - `setTimeout`
    * Callback Queue
    * Event Loop


## Synchronous execution

JavaScript engine (like Chrome's V8) compiles and interprets JS code. 
It uses the the Call Stack, Global Memory (the heap) and the Execution Context 
to run the code.

For example, considering this code,

```js
var num = 2;
function pow(num) {
    return num * num;
}
```

JS engine reads and parses the code in two phases. In the first phase, the JS engine "hoists" variable and function declarations, appearing in the global context, putting a reference top each in the Global Memory; basically, it puts identifiers in the *Symbol Table*. In the second phase they are bound to their value. So, in the example, the Symbol Table, in the heap, will contain 2 bindings: `num=2` and `pow=f`.

However, JS code runs in a bigger environment (browser or Node) and there are a lot of pre-defined functions and variables, called *globals*, held in the Global Memory (alongside with pow and num). 

When a function is called, it is placed on the Call Stack, which is a LIFO structure. That means a function can't leave the Call Stack if another function that is being executed (the one on "top" of the stack) is still executing, or worse, stucked. This is what **SINGLE-THREADED** essentially means - only one thing (function) can be executed at the time and until its completion no other action can take place.

> **JavaSript is single-threaded because there is a single Call Stack**

When the function is called, the engine pushes that function on the call stack and creates Global Execution Context, a global environment where JS code runs. The Global Execution Context is sort of like a sandbox where global JS functions live.

But if a function has nested variables or one or more inner functions then the JS engine creates a *Local Execution Context*, e.g.:

```js
var num = 2;
function pow(num) {
    var fixed = 89;
    return num * num;
}
pow(num);
```

In this case the Local Execution Context will contain a box for holding `fixed`. The Local Execution Context can be imagined as an inner box contained in the Global Execution Context box. And if there are nested functions inside of a nested function, the engine creates more Local Execution Contexts inside other Local Execution Contexts, which can resamble the Russian doll.

These components so far are all that is known by the JS engine and all needed to execute synchronous code. However, the problem appears with the slow code, like when we need to talk to the outside world, like networks. Because, JS is single threaded and lives inside (is a component of) the browser, that means the browser freezes during the execution of the long running code (which makes for a bad UX).

The solution is then to execute the slow code asynchronously by relegating the execution to an external entity - the browser (or C++ runtime in case of Node.js).

So, even if JS engine can only execute one (synchronous) function at the time, there is a way for slower functions to be executed asynchronously, that is by the browser.

So far, we've seen that JS engine reads JS file and performs the following:
- populates the Global Memory (Heap) with var and fn declarations
- pushes every fn invocation on the Call Stack
- creates Global Execution Context in which global fn are executed
- creates a lot of nested Local Execution Contexts (if needed)



## Asynchronous execution

Asynchronous JavaScript, Callback Queue and the Event Loop

The Call Stack can execute one function at a time and even one blocking function can literally freeze the browser. Luckily JavaScript engines are smart and with a bit of help from the browser can sort things out.

**When an asynchronous function is called the browser takes that function and runs it for JS engine**, so JS engine can proceed to work on other things.

```js
setTimeout(callback, 5000);
function callback(){
    console.log('hello timer!');
}
```

`setTimeout` is not a built-in JS function, but a part of Browser APIs. This means it is run by the browser right away; it does appear for a brief moment on the Call Stack, but it is immediately removed (taken over by the browser). After the timeout, the browsers takes the callback function, we supplied, and places it in the *Callback Queue* (Task Queue).

The `setTimeout` runs inside the browser context. After timeout has expired, the timer is triggered and the callback function is ready to run. But first it has to go through the Callback Queue, which is a FIFO data structure.

This is way the set timeout is not a guarantee, but more like a minimum delay. And it is also why even when the timeout of 0 the cb doesn't executes immediately, but next-ish.

**Every async fn must pass through the Callback Queue before it is placed on the Call Stack**.

The component that handles this is the *Event Loop*. One of its tasks is to move the function from the Callback Queue onto the Call Stack, if the latter is free.

**If there's a function in the Callback Queue and the Call Stack is empty, the Event Loop pushes the callback fn on the Call Stack**.

In the example code:

```js
var num = 2;
function pow(num) {
    return num * num;
}
pow(num);
setTimeout(callback, 0);
function callback(){
    console.log('hello timer!');
}
```

Provided the `callback` fn is ready to be executed: when `pow()` fn completes, the Call Stack is empty and the Event Loop pushes the `callback` in, which effectively runs it. The Event Loop waits for stack to be empty, otherwise the callback returns would appear in middle of some other code that is being executed.

**Browser APIs, Callback Queue and Event Loop are the pillars of async JS**.

Running the `setTimeout(callback, 0)` with 0 ms delay is a means of doing  the async fn call. This defers the (cb) fn, by putting it on the Call Stack (when it is empty) and then running it (instead of immediately by JS engine). It is used to defer a fn until the Call Stack is clear.

The XHR request functions (AJAX functionality) are also part of the Browser API; these network calls are now consolidating under the `fetch` API, and they're also used in jQuery as `get`, `post`, `ajax` functions.

```js
console.log('start');

$.get('url', function cb(data) {
  console.log(data);
});

console.log('end');
```

Browser events (page-loads, clicks, mouse-overs, etc.) are also managed by the Event Loop. They are not processed immediately but are pushed in the Callback Queue to be delt with when the Call Stack is free.

## Render Queue

The browser tries to repaint/render the screen every 16 ms, but it is constrained by JS load. If there's non-empty Call Stack the browser places call(s) for repaint in the *Render Queue*. Render Queue is similar to Callback Queue but it is given a higher priority.

If there's several async tasks being handled by the Browser APIs, which are subsequently placed on the Callback Queue, the Event Queue will interleave Callback Queue tasks with Render Queue tasks (and there will certainly be RQ tasks as they are spawned every ~16ms).


## Node

Generally, Node's JS is also single-threaded (V8, Call Stack, General Memory) and Node's sync methods will be executed in a single thread.

Node's methods are generally synchronous, but if async versions exists, it is recommended to use them instead of the sync ones. Many methods come in pairs as sync and async, with the synchronous ones (that have an async pair) ending in "-Sync", e.g. `readFile` vs `readFileSync`. It is recommended to always use the async methods.

Unlike JS in browsers, which is assisted in async tasks by the browser's WebAPIs, JS in Node is assisted in async tasks by the *C++ APIs* and by the *Kernal Async Methods*.

## C++ APIs
Async Node fns will call the C++ API that backs them up, and these C++ methods will may be executed in multiple threads. The C++ API that assists Node has a *Thread Pool* (TP), which, by default, consists of 4 threads. These 4 threads are spawned and then re-used for subsequent tasks. If all threads are busy, some tasks may have to wait for a thread to become free. This is illustrated by the Node's `crypto` module benchmark that showed the execution of CPU intensive cryptographic tasks in groups of 4.

Besides its many other tasks, the Event Loop (EL) in Node also acts as a central dispatcher, routing requests to C++ API and kernel async methods, and dispatching responses back to JS.

## Kernal Async Methods

Kernal Async Methods (KAM) are OS-dependent: **epoll** (linux), **kqueue** (mac), **GetQueuedCompletionStatusEx** (win).


For tasks related to networking JS async is assisted by the KAM. These are the network tasks in which the CPU doesn't have much to do, merely to cache the incoming data from time to time, so the tasks like these (downloading files and similar) are handled by the kernel on behalf of Node.

## ASync methods

Whether handled by C++ APIs or by the Kernal Async, it is important to recognize and always use Node's async methods.

The list of async methods (some are OS-dependent as OSs don't provide the same async primitives):

**Offloaded methods**:
* by *Kernal Async*
  - TCP/UDP servers and clients
  - pipes
  - dns.resolveXXX
  * nix only:
    - UNIX domain sockets
    - TTY input
    - NIX signals
    - Child process
* by C++ API and *Threaded Pool*
  - fs
  - dns.lookup
  - pipes (edge cases)
  * win only:
    - Child process
    - TTY input
    - TCP servers (edge cases)













