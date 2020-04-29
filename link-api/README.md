# README

## Getting Started

1. Verify you have the correct version of Ruby installed.  If you're using rbenv simply run `rbenv install`.
1. Run `bundle install` (`gem install bundler` first if you have a new Ruby version).
1. Copy the dotenv example: `cp .env.example .env`.
1. Find the Link Platform Dev GOOGLE_KEY and GOOGLE_SECRET either on the [LinkSF Google API Console](https://console.developers.google.com/apis/credentials?project=vivid-inferno-4672&authuser=1&organizationId=712657754575), or ask in #volunteer-eng.
1. You will need to install postgres. Recommended method:
    
    `brew install postgresql`
    
    `brew services start postgresql`

1. Create and migrate the database: `bundle exec rake db:create db:migrate db:seed` or `bundle exec rake db:drop db:setup db:seed`.
1. Open `/etc/hosts` with your favorite text editor (you probably need to sudo), and add `127.0.0.1 blomp.localhost` to the list of host aliases.
1. Start your server: `bundle exec rails server`.
1. Go to [http://blomp.localhost:3000](http://blomp.localhost:3000)

    It's a platform, so you can make your own "instance", say _chadradwell_, and go to [http://chadradwell.localhost:3000](http://chadradwell.localhost:3000)

## Troubleshooting

If you run into issues with `bundle install`, then visit the [bundle troubleshooting page](https://bundler.io/blog/2019/05/14/solutions-for-cant-find-gem-bundler-with-executable-bundle.html).

You may run into an issue with `rake db:*` tasks due to databases being a big mutable global variable. Keep calm, trust
no state, and try `bundle exec rake db:drop`.

If you're using Firefox, bless you. We also have no immediate solution, since [FF prepends non-proper domains (localhost)
with `www.`](https://stackoverflow.com/a/35124491), breaking this feature in local dev. Please let us know if you find a solution!
