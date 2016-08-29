class Pangram
  def self.is_pangram?(str)
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    count = 0
    alphabet.each { |letter|
      if str.downcase.match(letter) != nil
        count += 1
      end
    }

    count >= 26
  end
end

  module BookKeeping
    VERSION = 2 # Where the version number matches the one in the test.
  end