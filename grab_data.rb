(1..45).collect.each do |i|
  command = "node get-vote-data.js #{i}"
  puts command
  system command
  sleep 3
end
