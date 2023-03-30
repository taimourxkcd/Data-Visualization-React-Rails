require "csv"

class CsvController < ApplicationController
  def index
    @data = []
    CSV.foreach("#{Rails.root}/app/data/sphere-sample-data.csv", headers: true) do |row|
      @data << row.to_hash
    end
  end
end
