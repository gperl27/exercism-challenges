class PrimeFactors
  def self.for(num)
    factors = []

    if num == 1
      return []
    end

    divisor = 2

    while num > 1
      if num%divisor == 0
        factors << divisor
        num /= divisor
        divisor = 2
      else
        divisor += 1
          if num%divisor == 0
            factors << divisor
            num /= divisor
          end
      end
    end

    factors
  end
end

