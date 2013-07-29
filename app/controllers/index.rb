get '/' do


  erb :index
end


get '/:username' do
  @user= TwitterUser.find_by_username(params[:username])
  
end