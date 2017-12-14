class RegistrationsController < Devise::RegistrationsController


  private

  def sign_up_params
    params.require(:user).permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :image, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:user).permit(:username, :first_name, :last_name, :date_of_birth, :phone_number, :email, :image, :password, :password_confirmation, :current_password)
  end

end
