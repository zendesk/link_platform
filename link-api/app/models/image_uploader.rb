# frozen_string_literal: true

class ImageUploader < Shrine
  plugin :activerecord
  plugin :determine_mime_type
  plugin :logging, logger: Rails.logger
  plugin :remove_attachment
  plugin :store_dimensions
  plugin :validation_helpers
  plugin :versions

  Attacher.validate do
    validate_max_size 2.megabytes, message: 'is too large (max is 2 MB)'
    validate_mime_type_inclusion ['image/jpg', 'image/jpeg', 'image/png', 'image/gif']
  end

  def process(io, context)
    case context[:phase]
    when :store
      thumb = ImageProcessing::MiniMagick.source(io.download).resize_to_limit!(200, 200)
      { original: io, thumb: thumb }
    end
  end
end
