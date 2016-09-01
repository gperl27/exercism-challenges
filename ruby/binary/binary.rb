class Binary
  def initialize(num)
    if num.match(/[^01]/) != nil
      raise ArgumentError.new("Only 0s and 1s allowed")
    end
    @num = num
  end

  def to_decimal
    num = @num

    if num.length <= 1
      num.to_i*(2**0)
    else
      binary = []
      num = num.split("").reverse
      num.each_with_index { |num, index|
        binary << num.to_i*(2**index)
      }
      binary.reduce(:+)
    end
  end
end

module BookKeeping
    VERSION = 2
end