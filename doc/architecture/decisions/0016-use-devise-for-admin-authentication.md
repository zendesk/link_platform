# 14. Use Devise for Admin authentication

Date: 2018-08-01

## Status

Approved

## Context

We need a some way to authenticate and manage Link Platform Adminstrators.  Administrators will need to log in to their Link Instances to manage data and configuration.

## Decision

[Devise](https://github.com/plataformatec/devise#starting-with-rails) is a very popular gem that integrates well with ActiveRecord.  It provides support for [a ridiculous amount of authentication providers](https://github.com/omniauth/omniauth/wiki/List-of-Strategies) through Omniauth as well as a variety of features such as password reset.

## Consequences

Devise for better or for worse is a fairly complex solution.  With its extensibility comes a variety of features and configuration options that we may not need.  There are other options that are less heavy handed, from [Clearance](https://github.com/thoughtbot/clearance), which is a little lighter, to simply using `has_secure_password`.

In choosing Devise we're prioritizing flexibility for ease of setup.
