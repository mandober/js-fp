/*
CONSOLE OBJECT
==============
- Exposed as `Window.console`
- String substitution and additional arguments
- chrome: https://developers.google.com/web/tools/chrome-devtools/console/


DEBUGGING/LOGGING
=================
- console.log
- console.info
- console.warn
- console.error
- console.exception     error alias
- console.debug         in chrome 58+ only with "verbose" level selected


OUTPUT STYLE
============
- console.clear
- console.log       general plain output
- console.dir       interactive listing
- console.dirxml    XML/HTML Element representation, or JS Object view
- console.table     tabular data as a table


GROUPING RELATED OUTPUT
=======================
- console.group             inline group
- console.groupCollapsed    collapsed inline group
- console.groupEnd          exit inline group


PROFILING
=========
- console.profile           JS profiler; specify optional profile name
- console.profileEnd

TIMING
======
- console.time          start timer named as parameter
- console.timeEnd       stop specified timer, log elapsed seconds
- console.timeLog       log value of specified timer



METHODS
=======
- console.assert        print message and stack trace if 1st arg is false
- console.count         count number of times this label was called
- console.countReset


- console.timeStamp     add marker to Timeline or Waterfall
- console.trace         output a stack trace



HELPERS
=======

$_  last expression's value



Logging objects
===============
- Shows "live view" with the value updated as/if it changes:
    console.log(obj)
- To see value at the logging moment:
    console.log(JSON.parse(JSON.stringify(obj)))



*/
