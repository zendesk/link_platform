# Link Platform Admin Components

## Development

1. Check out `link_platform`
1. `cd link-admin`
1. `npm install`
1. add `DANGEROUSLY_DISABLE_HOST_CHECK=true` to `.env.development.local`
1. `npm start`

## Storybook

[Storybook](https://storybook.js.org/) is a development environment that helps developers move faster.
It removes the networking aspect of front-end programming and lets developers quickly iterate on visual tweaks
and state transitions.

`npm run storybook` will boot the app and watch for changes throughout the `src` directory. Read the [docs](https://storybook.js.org/)
and write a `WhateverComponent.stories.js` file to showcase and test your cool UI.

## Issues

> add `DANGEROUSLY_DISABLE_HOST_CHECK=true` to `.env.development.local`

https://github.com/facebook/create-react-app/issues/2233#issuecomment-357375184 => https://github.com/facebook/create-react-app/pull/2288

we can use node-http-proxy instead. just felt like being lazy for now
