# 3. Use PostgreSQL

Date: 2018-06-06

## Status

Accepted

## Context

We want the ability to run in many environments, including Heroku, and PostgreSQL is the most well supported in our desired environments.

## Decision

We will use PostgreSQL as our data persistence layer.

## Consequences

- We can deploy to Heroku without being forced into paid MySQL add-ons
- We won't be able to leverage some managed services which are based on other SQL solutions like MySQL
