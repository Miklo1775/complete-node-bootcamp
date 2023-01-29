/*

What is NodeJS and why do we use it?

Official definition:
NODEJS is a JS runtime built on Googles open source v8 JS engine.

JS outside of the browser:
Allows JS to run a program outside of a browser in a container. V8 engine is what runs the JS outside of the browser.

JavaScript on the Server:
-Using Node.js as a web server
-We can use JS on the server side of web development.
-Build fast, highly scalable network applications(back-end development)

Why and When to use Node.js?
Pros:
-Single threaded, based on event driven, non-blocking I/O model.
-Perfect for building fast and scalable data intensive apps.

Use NodeJS:
-API with database behind it(preferable NoSQL)
-Data streaming (think youtube)
-Real-time chat applcation
-Server-side web application
-Companies like Netflix, Uber, Paypal, and eBay started using node in production
-JS across the entire stack: faster and more efficient development
-NPM: huge library of open source packages available for everyone for free
-Very active developer community

Don't use:
-To build applications with heavy server-side processing(cpu intensive)
-For these processes, its better to use Ruby on Rails, PHP, or Python
-NodeJS wasn't developed for these purposes



////////////////////////////////////////////////////////////////////////////

Running JS outside of the browser


REPL:
-Read
-Eval
-Print
-Loop

To enter node REPL:
-type node

To exit:
-type .exit OR
-hit ctrl - d

Hitting tab in node brings up a list of global variables available to use.

Typing underscore _ pretty much brings up the previous result.

Example:
> 2 + 2
4
>_ + 2
6
****************************************************************************
Hitting tab once or twice on a constructor will bring up a list of methods or properties available to us.

Example:
>String.*tab*
////////////////////////////////////////////////////////////////////////////

Using Modules 1: 

To be able to use node modules in JS, we need to use tge function require('module name') and store it into a variable:

const fs = require('fs') > fs standing for file system
****************************************************************************

Reading and Writing Files:


*/
