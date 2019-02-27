# frozen_string_literal: true

class DeviseTokenAuthCreateAdmins < ActiveRecord::Migration[5.2]
  def change
    create_table :admins, id: :uuid do |t|
      ## Required
      t.string :provider, null: false, default: "email"
      t.string :uid, null: false, default: ""

      ## Database authenticatable
      t.string :encrypted_password, null: false, default: ""

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, default: false

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      t.integer  :sign_in_count, default: 0, null: false
      t.datetime :current_sign_in_at
      t.datetime :last_sign_in_at
      t.string   :current_sign_in_ip
      t.string   :last_sign_in_ip

      ## Confirmable
      t.string   :confirmation_token
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, :default => 0, :null => false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at

      ## User Info
      t.string :link_instance_id, null: false
      t.string :name, default: "", null: false
      t.string :nickname
      t.string :image
      t.string :email, default: "", null: false

      ## Tokens
      t.json :tokens

      t.timestamps
    end

    add_index :admins, %i[link_instance_id email],  unique: true
    add_index :admins, %i[uid provider],            unique: true
    add_index :admins, :reset_password_token,       unique: true
    add_index :admins, :confirmation_token,         unique: true
    # add_index :admins, :unlock_token,       unique: true
  end
end
