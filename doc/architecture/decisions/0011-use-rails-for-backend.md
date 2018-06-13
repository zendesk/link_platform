# 11. Use Rails for Backend

Date: 2018-06-13

## Status

Accepted

## Context

At the onset of the Link Platform project we needed to decide what framework to use for our backend. After some
discussion two choices presented themselves:
1. Serverless architecture using AWS (lamda, API Gateway, etc.)
1. Ruby on Rails

## Decision

The decision was made to use Ruby on Rails for our backend.

## Consequences

After comparing the two choices listed above, we decided to go with Ruby on Rails. Using
RoR will allow us to take advantage of the intrinsic value of the framework: development speed and
Zendesk developers' familiarity with the language. There were also concerns around the adoption of a serverless
architecture that we will not have to resolve since we are going with RoR: added complexity and lack of subject
knowledge, as well as versioning and open source contribution issues.
