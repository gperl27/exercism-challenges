class SumOfMultiples
  def initialize(*multiples)
    @multiples = multiples
  end

  def to(sum)
    multiples = @multiples
    all_multiples = []

    i = 0
    while(i<multiples.length)
      (0...sum).each { |num|
        if num % multiples[i] == 0
          all_multiples << num
        end
      }
      i+=1
    end
    
    all_multiples.uniq!
    all_multiples.reduce(:+)
  end
end