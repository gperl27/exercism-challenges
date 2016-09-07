class PhoneNumber
  def initialize(number)
    @number = number
  end

  def number
    if invalid_check || fake_eleven || invalid_length
      "0000000000"
    elsif check_eleven_digits
      number = @number[1..-1]
    else
      number = @number.gsub(/\D+/, "")
    end
  end

  def area_code
    @number[0..2]
  end

  def to_s
    number = @number

    if check_eleven_digits
      number = @number[1..-1]
    end

    number.insert(0, "(")
    number.insert(4, ") ")
    number.insert(9, "-")
  end

  private
    def invalid_check
      @number.match(/[a-zA-Z]+/) != nil || @number.length < 10
    end

    def check_eleven_digits
      @number.length == 11 && @number[0] == "1"
    end

    def fake_eleven
      @number.length == 11 && @number[0] != "1"
    end

    def invalid_length
      @number.gsub(/\D+/, "").length > 11
    end
end