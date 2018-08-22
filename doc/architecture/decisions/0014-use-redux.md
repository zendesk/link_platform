# 14. Use redux

Date: 2018-08-01

## Status

Accepted

## Context

Redux is a state container for JavaScript applications. It helps to manage state across an application.

[This article](https://hackernoon.com/the-react-state-museum-a278c726315) provides a nice non-comprehensive listing of various alternative state management libraries.

## Decision

We will use Redux in `link_platform` for state management.

## Consequences

Redux introduces a layer of complexity when introducing components and handling user interactions. This complexity may be undesirable if our application is simple or does not deal with many changes in state.
