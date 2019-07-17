# frozen_string_literal: true

# TODO:  Once we have a job infrastructure in place, run rake db:sessions:trim
# as per the recommendations in https://github.com/rails/activerecord-session_store
Rails.application.config.session_store(
  :active_record_store,
  key: '_link_platform_session'
)
