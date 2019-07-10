# 20. Background Job Framework

Date: 2019-07-10

## Status

Accepted

## Context

We need some form of background framework to do asynchronous tasks such as sending emails, creating accounts, and possibly some long import/export operations.

### Which Library?

Our use cases aren't particularly complicated.  Our main concerns are ease of integration and reliability.  In order of popularity from [The Ruby Toolbox](https://www.ruby-toolbox.com/categories/Background_Jobs), let's take a look.

#### Sidekiq

https://github.com/mperham/sidekiq

Sidekiq is the most popular Ruby job running framework by a fair margin.  It is well maintained and time tested.  It supports Ruby 2.0+ and Rails 3.2+, and all state is maintained in Redis.

The feature set ticks all the boxes:

* Priority queueing
* Retriable jobs
* Scheduling
* Realtime dashboards
* Persistent queues

#### Resque

https://github.com/resque/resque

We use Resque here at Zendesk so we have plenty of domain knowledge.  Similarly to Sidekiq, Ruby 2.0+ and 3+ are supported, and Redis is the state store.

Features include:

* Multiple queues
* Retriable jobs
* Scheduling
* Dashboarding
* Persistent queues

#### Delayed Job

https://github.com/collectiveidea/delayed_job

Delayed::Job inspired the creation of Resque, and has most of the same features.  It's main shortcomings are around its resiliency and throughput since state is stored in the database using ActiveRecord.  It has Ruby 2+ and Rails 3+ support.

It has:

* Job priority _or_ multiple queues
* Scheduling
* Retriable jobs
* Persistent queues

### Sucker Punch

https://github.com/brandonhilkert/sucker_punch

Sucker Punch is perhaps the simplest of the frameworks we're exploring.  Unlike the previous options, Sucker Punch stores all of its state in memory, meaning there's no external dependency for it to work.  Ruby 2+ is supported.

The features:

* Scheduling
* Priority queuing

## Decision

While Sidekiq and Resque both offer more features, and Sucker Punch is extremely light weight, Delayed::Job provides us a great set of features with no extra dependencies since we already have a database.  It integrates seamlessly with ActiveRecord, and should scale to meet our needs.  

To quote directly from [the Resque documentation](https://github.com/resque/resque):


> If you're doing Rails development, you already have a database and ActiveRecord. DelayedJob is super easy to setup and works great. GitHub used it for many months to process almost 200 million jobs.

[Here's another great reference I used for some comparisons.](https://scoutapm.com/blog/which-ruby-background-job-framework-is-right-for-you)

## Consequences

Our jobs framework is directly tied to our database and ActiveRecord.  We will also lack easy insight into the state of our jobs since there is no native UI.
