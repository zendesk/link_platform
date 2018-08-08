# 10. Use Preact for the End-User Application

Date: 2018-06-13

## Status

Accepted

## Context

Our current implementation of the link-user application is built on React via [create-react-app](https://github.com/zendesk/link_platform/blob/master/doc/architecture/decisions/0005-create-react-app-npm-no-yarn.md).

This ADR reviews the possibility of ejecting from `create-react-app` and using Preact for the link-user application going forward.

### What is Preact?

[Preact describes itself as](https://preactjs.com/) a "fast 3kB alternative to React with the same modern API." React comes in at about 45kB.

### Differences to React

Preact achieves a 95% reduction in size by differing in several areas from React.

One significant difference between Preact and React is that Preact does not rely on [Synthetic Events](https://reactjs.org/docs/events.html) for browser event handling. Rather, it relys directly on the browser's native `addEventListener`. A cross-browser API is still provided in that event handler registration and removal are abstracted; however, there is no custom event propagation scheme like in React.

Another difference is that Preact does not use [React.Children](https://reactjs.org/docs/react-api.html#reactchildren). Instead, `props.children` is always implemented as an array. See Preact's "What's Missing" section of their article on [Differences to React](https://preactjs.com/guide/differences-to-react) for more detail.

### Similarities to React

Preact includes many of the same concepts that developers familiar with React are used to. Here are some examples from the [Preact website](https://preactjs.com/guide/differences-to-react):

- ES6 Class Components
- High-Order Components
- Stateless Pure Functional Components
- Contexts
- Refs
- Virtual DOM Diffing

The code itself is extremely similar to React, so much so that one might mistake it for React code at first glance. Below is a Preact code snippet from the Preact [website](https://preactjs.com/).

```
export default class Stars extends Component {
    async componentDidMount() {
        let stars = await githubStars(this.props.repo);
        this.setState({ stars });
    }
    render({ repo }, { stars=0 }) {
        let url = `//github.com/${repo}`;
        return (
            <a href={url} class="stars">
                ⭐️ {stars} Stars
            </a>
        );
    }
}
```

One notable difference here is in the component's `render()` function. In Preact, `props` and `state` are passed into the `render()` function.

```
import { Component } from 'preact';

class MyComponent extends Component {
    render(props, state) {
        // props === this.props
        // state === this.state

        return <h1>Hello, {props.name}!</h1>;
    }
}
```

### Case Studies

There are many existing examples of companies taking their React applications and converting them to Preact applications in pursuit of smaller bundle sizes and performance gains.

One excellent example is the Uber mobile web app. Angus Croll of Uber engineering details their decision to switch to Preact and the benefits gained in a post titled [Building m.uber: Engineering a High-Performance Web App for the Global Market](https://eng.uber.com/m-uber/)

Uber's mobile web app is intended to be fast on low-performance devices and slow, 2G connections, much like link-user. By switching to Preact and implementing a few other performance enhancing features such as rendering Preact on the server, Uber was able to reduce their bundle size from 280kB to 17kB and greatly increase their time to first pain.

Treebo, a budget Hotel chain out of India, has [wrote up a great performance case](https://medium.com/dev-channel/treebo-a-react-and-preact-progressive-web-app-performance-case-study-5e4f450d5299) study on switching their mobile site from React to Preact. Treebo was able to achieve a 70% improvement in time to first paint and a 31% improvement in time to interactive.

## Decision

No decision yet. I believe using Preact will be beneficial.

## Consequences

Switching to Preact would most likely result in significant performance gains for the link-user site.

The process of switching from a `create-react-app` based application to Preact is not very labor-intensive and is well-documented in Preact's [docs](https://preactjs.com/guide/switching-to-preact).

We could lose out on compatibility with some React libraries. It appears that there is a lot of support for Preact in libraries we currently use/ might use.

- For CSS-in-JSS there is
  [preact-fela](https://github.com/rofrischmann/fela/tree/master/packages/preact-fela)
- If we end up using Apollo as a data layer it is [supported as well](https://dev-blog.apollodata.com/whats-next-for-react-apollo-4d41ba12c2cb)

Additionally, using [preact-compat](https://github.com/developit/preact-compat) we can maintain full compatibility with React libraries.

We should also check that Preact [supports all of the browsers](https://preactjs.com/about/browser-support) that we intend to support.
