require "csv"
require "pry"

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

      # GET /api/v1/csv/source/:source
      def by_source
        url = "#{Rails.root}/app/data/sphere-sample-data.csv"
        if params[:source].present?
          url += "?source=#{CGI.escape(params[:source])}"
        end

        data = []
        CSV.foreach(url, headers: true) do |row|
          data << row.to_hash
        end

        source_data = data.select { |row| row["source"] == params[:source_name] }
        puts "Selected data: #{source_data.inspect}" # Debug output
        # debugger
        render json: source_data
      end

      def by_optimization_target
        url = "#{Rails.root}/app/data/sphere-sample-data.csv"
        if params[:optimisation_target].present?
          url += "?source=#{CGI.escape(params[:optimisation_target])}"
        end

        data = []
        CSV.foreach(url, headers: true) do |row|
          data << row.to_hash
        end

        source_data = data.select { |row| row["optimisation_target"] == params[:optimisation_target_name] }
        puts "Selected data: #{source_data.inspect}" # Debug output
        # debugger
        render json: source_data
      end
    end
  end
end
