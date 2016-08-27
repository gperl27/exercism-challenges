class Squares
	def initialize(num)
		@num = num
	end

	def square_of_sum
		num = @num

		square = (1..num).reduce(0) {|total, num|
			total += num
			total
		}**2
	end

	def sum_of_squares
		num = @num

		square = (1..num).reduce(0) {|total, num|
			total += num**2
			total
		}
	end

	def difference
		square_of_sum - sum_of_squares
	end

end

  module BookKeeping
    VERSION = 3 # Where the version number matches the one in the test.
  end