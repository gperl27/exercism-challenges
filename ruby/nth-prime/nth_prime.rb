class Prime
    def self.nth(n)
        if n < 1
            raise ArgumentError.new("N should be positive")
        end

        primes = [2, 3]
        num = primes[-1]

        while n > primes.length
            num += 1

            unless primes.any? { |prime| num % prime == 0 }
                primes << num
            end
        end
        #p primes
        primes[n-1]
    end
end