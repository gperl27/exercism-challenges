class RunLengthEncoding
  def self.encode(input)
    input.gsub(/(.)\1+/) {|run| "#{run.length}#{$1}" }
  end

  def self.decode(input)
    input.gsub(/(\d+)(.)/) { $2 * $1.to_i }
  end
end

module BookKeeping
    VERSION = 2
end