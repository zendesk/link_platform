class RemoveDeviseFromAdmins < ActiveRecord::Migration[5.2]
  def change
    change_table :admins do |t|
      t.remove_index :confirmation_token
      t.remove_index :email
      t.remove_index :reset_password_token
      t.remove_index :unlock_token
      t.remove_index [:email, :link_instance_id]
      t.remove :encrypted_password, :reset_password_token, :reset_password_sent_at, :remember_created_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at, :current_sign_in_ip, :last_sign_in_ip, :confirmation_token, :confirmed_at, :confirmation_sent_at, :unconfirmed_email, :failed_attempts, :unlock_token, :locked_at
    end
  end
end
