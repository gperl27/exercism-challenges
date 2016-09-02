class Array
  def accumulate
    new_element = []
    each {|block|
      new_element << (yield block)
    }
    new_element
  end
end