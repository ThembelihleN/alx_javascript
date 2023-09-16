Lexical scoping, also known as static scoping, is a fundamental concept in JavaScript (and many other programming languages) that determines how variable scope is determined at the time the code is written, based on the physical structure of the code. Lexical scoping is used to determine the scope of a variable or identifier based on where it is declared in the source code.

In lexical scoping, the scope of a variable is defined by its surrounding code structure, specifically where it is nested inside functions and blocks. When you reference a variable within a function, JavaScript looks for that variable first within the function's own scope. If it doesn't find it there, it looks in the next outer scope, and so on, until it reaches the global scope.

source: chat.openai.com