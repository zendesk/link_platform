# 18. Put OpenReferral resources in an API namespace

Date: 2018-08-08

## Status

Accepted

## Context

Link-API is primarily an API application, but it has a few additional responsibilities beyond
the API for the [OpenReferral](https://openreferral.readthedocs.io/en/latest/) spec. To create a
clear distinction of the resources specific to the platform and the OpenReferral compliant
resources, I propose that we keep all OpenReferral resource API routes in a unique namespace and
the Link Platform logic in an independent namespace.

For example, if we add the concept of a User, the route should look something like:

```
/users/123
```

The API for a Service should look something like:

```
/api/services/123
```

In the future we may want to iterate on the API, and this requires a way to version the API to
allow consumers to transition. We could version the API by URL namespace, for example `/api/1`,
or we could version the API with request metadata such as a header. I propose we take the latter
approach and use request metadata to control API versions.

## Decision

Routes for the OpenReferral resouces will be placed in the `/api` namespace. If we need to version the API,
these routes will be versioned using request metadata such as media type or a header to specify the
version of the API.

Routes for non-OpenReferral resources will be in the root namespace, for example `/link_instances/new`.

## Consequences

PROS

- As APIs are versioned and iterated on, we won't have to worry about changing the path and breaking
  any integrations that may be used.
- There is a clear distinction of how the APIs are used. Anything in `/api` will be OpenReferral compliant,
  while anything that is not in `/api`

CONS

- API consumers will automatically get the latest version of the API unless they are specifying
  the header.
