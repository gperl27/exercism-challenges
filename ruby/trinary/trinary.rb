class Trinary
  def initialize(num)
    @num = num
  end

  def to_decimal
    if invalid?
      return 0
    end

    index = 0
    trinary = @num.split("").reverse.map {|num|
      num = num.to_i*(3**index)
      index += 1
      num
    }.reduce(:+)
  end

  private
  def invalid?
    @num.match(/[^012]/) != nil
  end
end

module BookKeeping
    VERSION = 1
end