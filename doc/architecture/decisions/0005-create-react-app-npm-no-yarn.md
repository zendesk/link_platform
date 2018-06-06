# 5. Create React App + NPM (No Yarn)

Date: 2018-06-06

## Status

Accepted

## Context

We needed to decide how best to create and enforce a uniform file structure for our separate directories containing
react applications. This also led to a discussion about whether we should use Yarn or NPM.

## Decision

After discussion, it was determined that we would use [Create React App](https://github.com/facebook/create-react-app) 
to create a uniform project structure. With regard to Yarn vs. NPM, we concluded that using Yarn would introduce yet
another dependency and level of abstraction, and that it would not bring enough value to the project to justify those 
drawbacks. 

## Consequences

Using Create React App will give a good starting point and file structure guidance for our React applications, and 
NPM, a simple and reliable package management solution.
