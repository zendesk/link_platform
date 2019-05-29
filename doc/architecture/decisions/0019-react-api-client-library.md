# 19. React API Client Library

Date: 2019-03-06

## Status

Accepted

## Context

Both link-admin and link-user need some way to communicate with the link-api.  Instead of re-inventing the wheel, we've decided to use an off the shelf solution to manage requests to our back end.

### Which Library?

We have found a few options which look well supported and have many of the features we're looking for.  We are optimizing for compatibility, package size, and feature set.

In no particular order, they are Fetch, Axios, Superagent, and Apollo Link Rest.

#### Fetch

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

Fetch is a promise based library that is considered a new developing web standard.  It exists in two formats:  the official standard package `fetch`, and a polyfill implementation from Github called `whatwg-fetch`.  Its feature set is relatively limited. While it does support promises, request cancellation, and blob upload, it doesn't feature request interception or data transformation.  It seems like failed requests also fail silently.

Because fetch has native support on most desktop browsers, [compabitility is very good](https://github.com/github/fetch#browser-support).  The Github polyfill implementation should allow it to be compatibile with most mobile browsers.

Lastly, with `whatwg-fetch`'s [package size of 7.9kB](https://bundlephobia.com/result?p=whatwg-fetch@3.0.0), it is extremely light weight.

#### Axios

https://github.com/axios/axios

Axios is an enormously popular open source HTTP client built upon Fetch.  It seems to support all of the same features as Fetch plus some, including request interception and canceling, automatic transforms, and XSRF protection.

Official browser compatibility is [on par with Fetch](https://github.com/axios/axios#browser-support) for desktop browsers, but documentation on mobile browsers is very difficult to find.  There is no polyfill required for Axios.

Axios' package size [sits around 12kB](https://bundlephobia.com/result?p=axios@0.18.0), making it good enough for our use in Link.

#### Superagent

https://github.com/visionmedia/superagent

Superagent is another very popular open source HTTP client.  It has an extensive set of plugins supporting a wide range of features from caching to request throttling.  Multipart requests, request retry, and native auth support (which we may not actually need) set it apart from many of the other libraries under consideration.

Although [the compatibility section](https://github.com/visionmedia/superagent#supported-browsers-and-node-versions) is sparse, it quotes Firefox, Chrome, Safari and IE10 with no polyfill as well as Android and iPhone support.  IE9 is supported with polyfill.

Superagent has a slightly larger [package size of 16.8kB](https://bundlephobia.com/result?p=superagent@4.1.0).

#### Apollo Link Rest

Apollo Link Rest incorporates REST features into the well known GraphQL client Apollo.  The Link Rest portion allows the use of GraphQL queries in Javascript while still having a REST server while bringing with many of the advantages of the original Apollo client.  This includes a variety of benefits such as request caching, data normalization, easy state management, and seamless integration with React.

Browser compatiblity information it difficult to find for Apollo, but it sounds like it's compatibile with all major browsers including IE11 with a polyfill.  Mobile support is unknown.

Apollo Link Rest has a [package size of 13kB](https://bundlephobia.com/result?p=apollo-link-rest@0.7.0), but requires `apollo-link` and `graphql` as peer dependencies, which brings package size to around 200kB.

## Decision

The real debate is between Github's `whatwg-fetch` Fetch polyfill and Axios.  While `whatwg-fetch` offers the widest possible range of compatible browsers, I think that the Axios provides us with enough support while offering a more rich feature set and a better developer API.

I propose we use Axios as our Javascript HTTP client.

## Consequences

Major concequences of choosing Axios include:

* A slightly larger package size
* No automatic request caching
* No native support for GraphQL
