class Raindrops
	def self.convert(num)
		str = ""
		if num % 3 == 0
			str << "Pling"
		end

		if num % 5 == 0
			str << "Plang"
		end

		if num % 7 == 0
			str << "Plong"
		end

		if str == ""
			num.to_s
		else
			str
		end
	end
end

module BookKeeping
    VERSION = 2 # Where the version number matches the one in the test.
end