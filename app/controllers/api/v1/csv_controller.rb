require "csv"

# app/controllers/api/v1/csv_api_controller.rb

module Api
  module V1
    class CsvController < ApplicationController
      def index
        data = []
        CSV.foreach("#{Rails.root}/app/data/sphere-sample-data.csv", headers: true) do |row|
          data << row.to_hash
        end
        render json: data
      end

      def date
        data = []
        CSV.foreach("#{Rails.root}/app/data/sphere-sample-data.csv", headers: true) do |row|
          data << row["date"] # add only date to the data array
        end
        render json: data
      end
    end
  end
end
