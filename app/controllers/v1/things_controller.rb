class V1::ThingsController < ApplicationController
  def index
    render json: { :things =>[
      {
        :name => 'something',
        :guid => 'azer011111'
      }
    ] }.to_json
  end
end
