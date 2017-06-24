class PollerJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later

  # rescue SignalException

  # rescue Exception => e
  #   rescue_from_namespace 'poller', e
  end
end
