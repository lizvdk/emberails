class GoatSerializer < ActiveModel::Serializer
  attributes :id, :name, :bio, :snack, :is_favorite
end
