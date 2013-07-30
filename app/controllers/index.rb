get '/' do
  erb :index
end

get '/grab' do
  redirect to("/#{params[:username]}")
end

get '/:username' do
  @user= User.find_or_create_by_username(params[:username])
  p "here are the tweets #{@user.tweets}"
  if @user.tweets_stale? || @user.tweets.empty?
     @user.fetch_tweets!
  end
  @tweets = @user.tweets.limit(10)
  erb :index
end
