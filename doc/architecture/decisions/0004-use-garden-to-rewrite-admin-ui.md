# 4. Use React and Garden to rewrite admin UI

Date: 2018-06-06

## Status

Accepted

## Context

In general, we have decided to rewrite the admin UI as we port link-sf into the new Link Platform project. This is because we intend to make a number of improvements on its reliability and UX consistency. 

We considered using the [Admin on rest](https://github.com/marmelab/admin-on-rest) library which would give us a lot of data handling for free, including a REST client and validation. However, when we use [Zendesk Garden](https://garden.zendesk.com/) we will also get validation styles, and then will be able to a) control how we handle data ourselves, b) support another one of Zendesk's open source projects, and c) get the nicer styles provided by Garden which are also reflective of the Zendesk brand.

## Decision

Admin pages will be rewritten using React, Zendesk Garden, and a REST client to be determined. We will use Create React App to scaffold the directory. Its contents will be separated into folders for each stateful component.


## Consequences

Keeping the styling consistent across the admin interface will be made much easier. Making admin look nice in general will be much easier. We will need to choose a REST client for the Admin react app.
