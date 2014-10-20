class EmployeesController < ApplicationController
  def index
    render json: Employee.all, code: 200
  end
end