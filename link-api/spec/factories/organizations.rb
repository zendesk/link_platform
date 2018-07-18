FactoryBot.define do
  factory :organization do
    name "MyCharity"
    alternate_name "A charity for myself"
    description "This is an organization that is used to help people build organizations"
    email "bcolfer@zendesk.com"
    url "http://example.com"
    tax_status "MyString"
    tax_id "123456789"
    year_incorporated "2018-06-20"
    legal_status "Non-profit"
  end
end
