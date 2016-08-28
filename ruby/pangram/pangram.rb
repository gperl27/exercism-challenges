class Pangram
  def self.is_pangram?(str)
    alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    count = 0
    alphabet.each { |letter|
      if str.downcase.match(letter) != nil
        count += 1
      end
    }

    if count >= 26
      true
    else
      false
    end
  end
end

  module BookKeeping
    VERSION = 2 # Where the version number matches the one in the test.
  end