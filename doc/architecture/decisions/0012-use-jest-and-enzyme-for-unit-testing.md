# 12. Use Jest and Enzyme for unit testing

Date: 2018-06-20

## Status

Approved

## Context

Jest is a general JavaScript testing framework. Enzyme is a testing utility that makes it easier to assert, manipulate, and traverse React components. [This](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3) article goes into detail about various testing alternatives and [this](https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8) article details using Jest with Enzyme. 

## Decision

Based on the familiarity of our engineers with Jest and Enzyme and the large community of support, use Jest and Enzyme to unit test our React application. 

## Consequences

Engineers who have not used Jest and Enzyme before will need to learn both. However, documentation is well organized and easy to understand for both. Tests may also slow down development initially, but will ensure that future changes to components do not change core functionality. 
