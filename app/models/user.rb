class User < ActiveRecord::Base
  has_many :tweets# Remember to create a migration!

  def tweets_stale?
    (Time.now - self.tweets.last.created_at) / 900 >= 900
    # true if most recent tweet more then 15 minutes old 60 seconds * 15 = 900 
  end

  def fetch_tweets!
    Twitter.user_timeline("#{self.username}").each do |tweet|
      self.tweets << Tweet.create(:text => tweet.text,
                                  :user_id => self.id)
    end
  end
end
