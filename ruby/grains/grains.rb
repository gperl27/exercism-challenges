class Grains
  def self.square(n)
    squares = [1]

    (0..62).each {|num|
      double = squares[num]*2
      squares << double
    }
    @squares_array = squares
    squares[n-1]
  end

  def self.total
    @squares_array.reduce(:+)
  end

end
