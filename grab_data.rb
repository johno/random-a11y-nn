45.times do |i|
  command = "node get-vote-data.js #{i}"
  puts command
  system command
  sleep 15
end
