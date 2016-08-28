class Robot
	attr_reader :name

	def initialize
		@name = ""
	end

	def name
		if @name == "" 
			alphabet = ('A'..'Z').to_a
			num = (100..999).to_a
			name = []

			two_letters = alphabet.sample(2)
			num = num.sample

			name << two_letters
			name << num

			name = name.join("")
			@name = name
		else
			@name
		end
	end

	def reset
		@name = ""
	end
end


module BookKeeping
    VERSION = 2	 # Where the version number matches the one in the test.
end