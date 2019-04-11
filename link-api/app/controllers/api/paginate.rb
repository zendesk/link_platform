module Api::Paginate
  class << self
    def paginate(page, xs, order_query = 'created_at DESC')
      entity = xs.name.downcase
      pages = xs.order(order_query).page(page)

      {
        "#{entity}_count" => pages.total_entries,
        entity.pluralize => pages
      }
    end
  end
end
