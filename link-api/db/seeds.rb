# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
LinkInstance.create!(name: 'LinkSF', email: 'linksf@zendesk.com', subdomain: 'linksf')
Settings.create!(theme_color: '#000000', button_color: '#CCCCCC', feedback_email: 'linksf@zendesk.com', link_instance_id: '1')
