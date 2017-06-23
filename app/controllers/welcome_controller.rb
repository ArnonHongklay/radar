class WelcomeController < ApplicationController
  def index
    token = ENV['AMADEUS_KEY']

    domain = 'http://api.sandbox.amadeus.com/v1.2/flights'
    origin = 'BOS'
    departure_date = '2017-09-06--2017-09-26'
    duration = '7--9'
    max_price = '500'

    @data = open("#{domain}/inspiration-search?origin=#{origin}&departure_date=#{departure_date}&duration=#{duration}&max_price=#{max_price}&apikey=#{token}").read

    respond_to do |format|
      format.html
      format.json { render json: @data }
    end
  end
end
