class ApplicationController < ActionController::API
	include ActionController::MimeResponds

  def set_header_pagination( collection )
    response.header["X-Pagination-PerPage"] = collection.per_page.to_s
    response.headers["X-Pagination-TotalPages"] = collection.total_pages.to_s
    response.headers["X-Pagination-CurrentPage"] = collection.current_page.to_s
    response.headers["X-Pagination-totalItems"] = collection.total_entries.to_s
    
  end

end