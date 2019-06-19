# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Taxonomy, type: :model do
  let(:taxonomy) { build(:taxonomy) }
  let(:broken_taxonomy) { build(:taxonomy, name: nil) }

  it 'requires a name' do
    assert taxonomy.save
  end

  it 'fails without a name' do
    refute broken_taxonomy.save
  end
end
