class Array
  def keep
    keepers = select {|block|
      yield block
    }
  end

  def discard
    discards = reject {|block|
      yield block
    }
  end
end