# README

## Getting Started

1. Verify you have the correct version of Ruby installed.  If you're using rbenv simply run `rbenv install`.
1. Run `bundle install` (`gem install bundler` first if you have a new Ruby version).
1. Copy the dotenv example: `cp .env.example .env`.
1. Create and migrate the database: `bundle exec rake db:create db:migrate db:seed`.
1. Start your server: `bundle exec rails server`.
