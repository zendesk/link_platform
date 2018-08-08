# 13. Use Fela (CSS in JS) for Styling

Date: 2018-06-20

## Status

Accepted

## Context

As part of the process of rewriting the admin components for link platform, we need to decide on what strategy we want
to use for including styling in our application.
There were two main choices:
* CSS stylesheets
* CSS-in-JS

### Why CSS-in-JS?

There are many benefits to CSS-in-JS which are nicely outlined in
[this article]('https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660'):
* Enforces fundamental scoping without relying on pure convention (automatically generated classes).
* Renders critical CSS baked in, as components bring their styles with them automatically.
* Removes the necessity to hard code class names.
* Increases reusability of styles.
* Improves maintainability and dead code detection

### Why Fela?

[Fela](https://github.com/rofrischmann/fela) is a high performance, framework agnostic
tool to handle state-driven styling in Javascript. It also uses Atomic Class design to
generate class names, and creates stylesheets with those class names, which allows for
modular style reuse. Fela performs about
[four times faster](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md)
than Glamorous. Fela has also been used by Zendesk engineers in the past and so comes
with the added bonus of having some internal knowledge already in place to hit the
ground running.

## Decision

We will use CSS-in-JS, in the form of Fela and React-Fela.

## Consequences

Instead of writing styles to stylesheets, they will be built into  their respective components.
