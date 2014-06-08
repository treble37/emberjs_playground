require 'spec_helper'

describe Contact do
  let(:contact) { FactoryGirl.build_stubbed(:contact) }

  subject { contact }

  it { should respond_to :last_name }
end