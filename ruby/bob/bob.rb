class Bob
  def hey(remark)

    if remark.lstrip.empty?
      "Fine. Be that way!"
    elsif  remark.upcase == remark && remark.scan(/[a-zA-Z]|\d+/).length != remark.scan(/\d+/).length
      "Whoa, chill out!"
    elsif remark[-1] == "?"
      "Sure."
    else
      "Whatever."
    end
  end
end