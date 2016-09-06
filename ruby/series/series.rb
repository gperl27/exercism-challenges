class Series
  def initialize(num)
    @num = num
  end

  def slices(n)
    if n > @num.length
      raise ArgumentError.new("Cannot have a series greater than the length")
    end

    series_arr = []
    num_arr = @num.split("").map {|num| num.to_i }
    index = 0
    while index < num_arr.length
      series_arr << num_arr.slice(index...(index+n))
      index += 1
    end
    series_arr.delete_if {|series|
      series.length != n
    }
  end
end