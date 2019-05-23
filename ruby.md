# Ruby

Rails and Rspec are [Domain specific languages](https://en.wikipedia.org/wiki/Domain-specific_language) and add another layer of abstraction to the Ruby programming language.

## Stylistic Conventions

When you see the `#` sign at the beginning of a line, that means anything after it, on the same line, is a comment. 

When you define or initialize a method, variable, or file, you should always use `snake_case` formatting.

When you want to represent a value that will not change in your Ruby program, you define a constant variable, often referred to as a constant. In Ruby, constants are denoted with all uppercase letters.

When working with `do/end` blocks, prefer `{ }` when the entire code expression fits on one line.

When naming your classes you will use `CamelCase` formatting. `CamelCase` uses no spaces and capitalizes every word.

## Methods

As a documentation convention, methods are listed out with either a `::` or a `#` to indicate two different kinds of publicly accessible methods. Methods denoted by `::` are considered *class methods*, while methods denoted by `#` are considered *instance methods.*

The `::` symbol is used as a namespace in actual Ruby code, while the `#` is used as a comment. **Their use here in Ruby documentation is completely different from their use in actual code.**