class ETL
  def self.transform(old)
    updated = Hash.new
    old.each { |key, values|
      values.each { |value|
        updated[value.downcase] = key
      }
    }
    updated
  end
end