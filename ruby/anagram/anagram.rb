class Anagram
  def initialize(word)
    @word = word
  end

  def match(words_arr)
    deleteIdenticals(words_arr)

    @word = @word.downcase.chars.sort { |a, b| a.casecmp(b) }.join
    organized_words = organize(words_arr)

    the_anagram = []

    match = organized_words.each_with_index { |word,index|
      if word == @word
        the_anagram << words_arr[index]
      end
    }
    the_anagram
  end

  private
  
  def organize(arr)
    organized_arr = arr.map {|word|
      word.downcase.chars.sort { |a, b| a.casecmp(b) }.join
    }
  end

  def deleteIdenticals(arr)
    arr.delete_if {|word|
      @word == word.downcase
    }
  end
end