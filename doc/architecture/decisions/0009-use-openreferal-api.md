# 9. Use OpenReferal API

Date: 2018-06-13

## Status

Proposed

Amended by [17. Use string (uuid) for all model id fields](0017-use-strings-for-all-model-id-fields.md)

## Context

[Open Referral](https://openreferral.org/) is non-profit who develops a public API spec for health, human and social services data. Part of their mission is to standardize these civic services data.
Zendesk has historically partnered with Open Referral in an effort to support the spread of this standardization; we modeled our previous LinkSF data to resemble that spec.
In this new project, we want to further support these efforts by exposing an open API which adheres as closely as possible to the Open Referral standard. Documentation on this standard can be found [here](https://openreferral.readthedocs.io/en/latest/).

## Decision

Adopt and extend the OpenReferal API and data structure.
We will extend the model to accommodate data that is specific to the link platform system.

## Consequences

This will make the adoption of the platform easier and provide a way to facilitate data exchange.
