# Welcome to JS notes
---
##### Here you will learn core concepts of javascript and know how JS works behind the scene.

* "Everything in JavaScript happens inside an Execution Context".

#### Execution Context - 
Execution Context can be devided into these two components --
Memory Component | Code Component
|---------|----------|
| This is also called as **Variable Environment** | This is also called as **Thread of Execution** |
| All declared variables and functions lies here | Line by line code execution happens here |
| Variables and function are stored in key value pair  |  
| `key: value`, `a: 10` |
| `fun: {...}` |

* "Javascript is Synchronous, Single- Treaded, Interpreted Language".
>Synchronous - Code runs in specific order.
>Single-thread - Only one line of code can be executed at a time.
>Interpreted Language - Code execution happens line by line.

Every JavaScript program executes in two phases - 
1. **Memory Allocation phase** - Program executes line by line and all variables are declared and initialize with `undefined` in memory component in this phase; all function are also stored in memory, all code inside the function body is stored in memory in this phase.
2. **Code Execution phase** - Again program is executed line by line and statements run line by line in this phase.

Javascript manages all the execution contexts in a stack that is called **Call Stack**.
>**Call stack** is also known as **Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack**.






