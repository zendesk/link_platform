FactoryBot.define do
  factory :settings, class: 'Settings' do
    theme_color "#00000"
    button_color "#CCCCCC"
    feedback_email "linksf@zendesk.com"
    link_instance
  end
end
