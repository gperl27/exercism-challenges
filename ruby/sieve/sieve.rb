class Sieve
  def initialize(num)
    @num = num
  end

  def primes
    num_list = []
    starting_num = @num
    prime_nums = []

    if starting_num >= 5
      (2..starting_num).each { |num|
        num_list << num
      }

      count = 2
      while(num_list.any?)
        prime_nums << num_list[0]
        num_list.select! { |num|
          num % count != 0
        }
        count += 1
      end
    elsif starting_num == 1
      return []
    else
      prime_nums << starting_num
      return prime_nums
    end

    prime_nums.uniq!
  end
end
p Sieve.new(1).primes
p Sieve.new(4).primes

p Sieve.new(20).primes