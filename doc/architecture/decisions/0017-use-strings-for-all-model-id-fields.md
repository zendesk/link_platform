# 17. Use string (uuid) for all model id fields

Date: 2018-08-08

## Status

Proposed

Amends [9. Use OpenReferal API](0009-use-openreferal-api.md)

## Context

To enhance the ability to import data from any source that is compliant with the OpenReferral
modle use strings for fields that are keys.

## Decision

Convert existing models to use strings instead of integers as the id fields and references.

## Consequences

It will be easier to import data from any organization with data in another system into
the link_platform system.

This will deviate from the standard way rails handles keys.
