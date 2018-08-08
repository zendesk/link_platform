# 15. Use Storybook

Date: 2018-07-18

## Status

Approved

## Context

We are starting to develop multiple components for `link_admin`, and the idea of
using some kind of component development environment to provide structure and
increased productivity to this endeavor was broached by Mr. Jacob Pandl.

### Why Component Explorers?

Adding a component explorer to our project and including it in our workflow would
result in a couple of key benefits. Component explorers allow engineers to build
modular UIs in isolation of the app's business logic, increasing interchangability
and component reuse potential. They also allow for easier parallel production, as
developers can work on different pieces of UI without state pollution. Using component
explorers would also help with component durability, as they allow a developer to
mitigate inconsistency by being able to test many states of the application, in particular those that can be difficult to replicate through mocking. Finally,
componet explorers allow developers to create easily sharable artifacts which can be
shared with PR reviewers and other stakeholders.

### Why Storybook Instead of Styleguidist?

It seems that while Storybook and Styleguidist both have similar toolsets, Storybook
will better suit our needs. Storybook is a workshop application, meaning that it is
designed to allow a developer to create UI components in isolation, mock state, data
and adjust props. It was also one of the first tools for UI components, which means
it comes with a good deal of maturity and momentum. Styleguidist, meanwhile, seems
to be more of a documentation tool for UI, creating pages in markdown and importing
UI components.

## Decision

For the purposes of developing UI components in isolation and speeding up
development, Storybook seems like the right choice. While Styleguidist would be a
useful tool, Storybook is the right choice when it comes to development.

## Consequences

Engineers working on `link_platform` will be able to work on new components in
isolation and in parallel. They will also be able to easily share components with
other developers, and test them throroughly with the state manipulation/mocking
included in Storybook.

## References
* [Component Explorers](https://blog.hichroma.com/the-crucial-tool-for-modern-frontend-engineers-fb849b06187a)
* [Storybook vs Styleguidist](https://blog.hichroma.com/storybook-vs-styleguidist-2bd93d6dcc06)
