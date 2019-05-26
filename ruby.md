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

## Parent

In Ruby every class sub-classes from some "parent". The class you're looking at also has access to methods - both instance and class - documented in the parent class.

## irb

Ruby has a built in interactive environment called "irb" that can be very helpful when writing Ruby code. When you want to exit `irb` back to the command line, just type `exit`.

## Running Ruby Code

When you have created a Ruby file, denoted by the `.rb` extension, you can run the code in that file by typing the `ruby` command followed by the file name in the command line.

When you run a Ruby file from the command line, the code gets executed by what's called an **interpreter**.

Sometimes, you'll have a long running Ruby program, or an error in the logic that results an infinite loop. To exit out of the program execution loop, use `control-c`. This will send an abort signal to the running program.

## RubyGems

The publishing system behind RubyGems is designed to let you download, publish and use useful ruby libraries on your system. That system is powered by the website www.rubygems.org. The libraries that the system publishes are called "gems". 

The code in a gem is like pre-packaged bundles of code written by someone to solve a useful problem. A gem is said to have been "cut" when a new version becomes available. All the public installable gems are hosted at http://rubygems.org, though their code is hosted on a code repository, such as a Github.com repository.

The `gem` command allows you to use RubyGems. When combined with the `install` command, one can download and install gems with their dependencies and any relevant documentation. The `Gemfile` offers a simple solution for organizing gems and their dependencies in a central location.

## Debugging Ruby code with Pry

[Pry](https://github.com/pry/pry) is a nifty library that doubles as an alternative to `irb` with a host of awesome features. 

To use pry we'll first have to install it:

`gem install pry`

This gives you the `pry` command which when entered in your terminal will open a new session just like you would with `irb`.

When you want to use `pry` for debugging you'll have to `require "pry"` and insert a `binding.pry` in your file.

What this means is that when your program gets to where `binding.pry` has been declared, it'll open a new `pry` session instead of moving on to the next line in the code. This gives you the opportunity to play around with your variables and objects to see why things are not working. This is an extremely powerful debugging technique since it lets you pause execution to inspect the state of all variables and objects at that line of code. After you're done looking at your variables, you can continue the program execution with `Ctrl + D`.