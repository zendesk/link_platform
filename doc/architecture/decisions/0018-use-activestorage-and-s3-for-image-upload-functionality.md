# 18. Use Shrine for Image Upload and Storage Library

Date: 2019-02-27

## Status

Accepted

## Context

As part of the `link_platform` feature set, we want to allow users to upload images which can be used for custom logos.
To support this, we need to decide on what gem (if any) we want to use to handle image upload, processing, caching, etc.

### To Gem or not to Gem

It doesn't make sense to re-invent the wheel and also potentially introduce bugs into our codebase by rolling
our own system, so we should use one of the several mature well-tested solutions out there for image uploading and
handling.

### Which Gem?

There are a couple of leading choices out there for handling image upload. The top contenders appear to be Paperclip,
ActiveStorage, and Shrine.

#### Paperclip

This was the go to gem to use in the past for a file attachment library, as it provided easy setup and a number of
useful features out of the box such as validation, image processing (e.g. transforming to a thumbnail), and pairity
with ActiveRecord attribute behavior. Paperclip has
[now been depricated](https://thoughtbot.com/blog/closing-the-trombone) however, due to a growing number of issues,
slowed contributions, and the advent of ActiveStorage, so would not be a suitable choice for this application.

#### ActiveStorage

ActiveStorage has now been put in place as the standard for Rails file-upload and storage. It's coupled with
ActiveRecord, which allows for some pretty nice utilies which allow for adding file upload and storage easily with
very little configuration or code required, see
[the docs](https://edgeguides.rubyonrails.org/active_storage_overview.html) for examples. This is a positive in that
we would be immediately productive using ActiveStorage, but it does impose a limit on us to use ActiveRecord as an
ORM. Since we have already committed to that, this isn't currently a big detractor, but is worth pointing out.
Finally, ActiveStorage supports and storage solutions we might consider, such as S3, Gcloud, and DigitalOcean spaces,
and direct upload out of the box.

#### Shrine

Shrine is a plugin-based uploader gem, with customizability being its main advantage. It can upload files in parallel,
validate file types and sizes, persist uploaded files on form rerender, and pause/resume large uploads. For a full list
of featurs see [the repo](https://github.com/shrinerb/shrine#shrine). It can also support the storage options we would
consider such as S3, Gcloud, etc. One key difference with Shrine vs. ActiveStorage is Shrine requires a migration per
table we want to have attachments on, while ActiveStorage uses a generic `ActiveStorage::Attachment` model -- a standard
join table with a polymorphic association, similar to Paperclip's implementation. This means that in ActiveStorage there
are two associations to traverse to get a record's associated attachments, resulting in extra queries to avoid n + 1
issues.

## Decision

Overall, while I think we could get by with ActiveStorage and hit the ground running faster with it, I believe it would
be a better long-term solution to use Shrine. The customizability and flexility of the library is very promising, not to
mention the various performance improvements and other support it has that simply does not exist yet in ActiveStorage.
While Shrine is more complicated, both in setup and implementation, I think it would be worth it for the full-featured
solution it provides.

## Consequences

We would use Shrine for our file upload gem, resulting in a higher setup cost and steeper learning curve, but a more
flexible and customizable app.
