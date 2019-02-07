# frozen_string_literal: true

# This file should contain all the record creation needed to seed the database
# with its default values. The data can then be loaded with the rails db:seed
# command (or created alongside the database with db:setup).

link_instance = LinkInstance.create!(
  name: "LinkSF",
  email: "linksf@zendesk.com",
  subdomain: "blomp"
)

organization = Organization.create!(
  name: "Sample org",
  description: "Organization description",
  url: "example.com",
  link_instance_id: link_instance.id
)

service = Service.create!(
  organization_id: organization.id,
  name: "Sample service",
  description: "Example service description",
  status: "Open",
  url: "http://service.example.com",
  link_instance_id: link_instance.id
)

location = Location.create!(
  name: "Some location",
  description: "This is a location where things happen",
  organization_id: organization.id,
  link_instance_id: link_instance.id,
  latitude: 123.4,
  longitude: 123.5
)

service_at_location = ServiceAtLocation.create!(
  link_instance_id: link_instance.id,
  service_id: service.id,
  location_id: location.id,
  description: "Helpful words"
)

Contact.create!(
  name: "Jennifer Hanson",
  title: "Contact Person",
  department: "Help Department",
  link_instance_id: link_instance.id,
  organization_id: organization.id,
  service_id: service.id,
  service_at_location_id: service_at_location.id
)

Eligibility.create!(
  eligibility: "Women",
  link_instance_id: link_instance.id,
  service_id: service.id
)

HolidaySchedule.create!(
  closed: false,
  opens_at: "10:54:20",
  closes_at: "15:54:20",
  start_date: "2018-10-04",
  end_date: "2020-10-04",
  link_instance_id: link_instance.id,
  location_id: location.id,
  service_id: service.id,
  service_at_location_id: service_at_location.id
)

Language.create!(
  language: "en",
  link_instance_id: link_instance.id,
  location_id: location.id,
  service_id: service.id
)

Phone.create!(
  phone_type: "voice",
  language: "eng",
  number: "(123) 456-7890",
  description: "Main voice line",
  link_instance_id: link_instance.id,
  location_id: location.id,
  organization_id: organization.id,
  service_id: service.id,
  service_at_location_id: service_at_location.id
)

PhysicalAddress.create!(
  attention: "Jennifer Hanson",
  address_1: "123 Some Street",
  city: "San Francisco",
  region: "San Francisco County",
  state_province: "CA",
  postal_code: "12345",
  country: "United States",
  link_instance_id: link_instance.id,
  location_id: location.id
)

PostalAddress.create!(
  attention: "Jennifer Hanson",
  address_1: "1019 Bedrock Blvd",
  city: "Bedrock City",
  region: "Greater Crater Lake",
  state_province: "CA",
  postal_code: "12345",
  country: "Gaia",
  link_instance_id: link_instance.id,
  location_id: location.id
)

Program.create!(
  name: "My Program",
  alternate_name: "Your Program",
  organization_id: organization.id,
  link_instance_id: link_instance.id
)
