class Phrase
  def initialize(sentence)
    @sentence = sentence
  end

  def word_count
    sentence = @sentence.gsub(/(?!')\W+/, " ").split(" ")
    word_counts = Hash.new(0)

    sentence.each { |word|
      unless word.match(/[a-z]+'$/) == nil
        word = word.gsub(/'+/, "")
      end
      word_counts[word.downcase] += 1
    }

    word_counts
  end
end

module BookKeeping
    VERSION = 1
end