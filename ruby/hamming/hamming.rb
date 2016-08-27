module BookKeeping
    VERSION = 3
end


class Hamming
	def self.compute(seq1, seq2)
		if seq1.length != seq2.length
			raise ArgumentError
		end
		count = 0
		seq1 = seq1.split("")
		seq2 = seq2.split("")
		(0..seq1.length).each { |index|
			if seq1[index] != seq2[index]
			count += 1
		end
		}
		count
	end
end