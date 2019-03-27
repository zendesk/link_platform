# frozen_string_literal: true

require 'shrine'
require 'shrine/storage/s3'

s3_options = {
  access_key_id: ENV.fetch('S3_ACCESS_KEY_ID'),
  secret_access_key: ENV.fetch('S3_SECRET_ACCESS_KEY'),
  region: 'us-west-1',
  bucket: 'link-platform-dev'
}

Shrine.storages = {
  cache: Shrine::Storage::S3.new(prefix: 'cache', **s3_options),
  store: Shrine::Storage::S3.new(prefix: 'store', **s3_options)
}
