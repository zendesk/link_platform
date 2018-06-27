# 8. Use Docker images to deploy the application

Date: 2018-06-07

## Status

Proposed

## Context

Use docker images to deploy the application.  

## Decision

Run the application as a docker image even without container orchestrator. 
For exmaple, we may run the new build as a container with a different port for testing on the same host as the 
current production version.  
This doesn't require all execution contexts to be docker images.
For example,  we can run the platform in a development container format but run it in Heroku as a non docker instance.

## Consequences

It provides for fast deployment and testing cycles.  It may increase the build times in some circumstances.
It means that it won't run the same way in all enviornments. 
