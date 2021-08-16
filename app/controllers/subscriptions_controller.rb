class SubscriptionsController < ApplicationController
  def create
    @subscription = Subscription.new(subscription_params)
    @subscription.save
    redirect_to new_subscription_path
  end

  def new
    @subscription = Subscription.new
    @subscriptions = Subscription.all
  end

  private
  def subscription_params
    params.require(:subscription).permit(:name, :email, :phone)
  end
end
