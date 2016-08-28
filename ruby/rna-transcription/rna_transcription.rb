class Complement
    def self.of_dna(dna)
        if dna.match(/[^ACGTU]/) != nil
            return ""
        end

        dna = dna.split("").map { |strand| 
            if strand == "G"
                strand = "C"
            elsif strand == "C"
                strand = "G"
            elsif strand == "T"
                strand = "A"
            elsif strand == "A"
                strand = "U"
            end
        }.join("")
        dna
    end
end

module BookKeeping
  VERSION = 4 # Where the version number matches the one in the test.
end