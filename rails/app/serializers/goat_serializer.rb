class GoatSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :snack, :is_favorite, :photo_url
end
