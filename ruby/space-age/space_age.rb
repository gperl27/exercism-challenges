class SpaceAge
  attr_accessor :age
  def initialize(age)
    @age = age
  end

  def seconds
    @age 
  end

  def on_earth
    @age/31557600.round(2)
  end

  def on_mercury
    (on_earth/(0.2408467)).round(2)
  end

  def on_venus
    (on_earth/(0.61519726)).round(2)
  end

  def on_mars
    (on_earth/(1.8808158)).round(2)
  end

  def on_jupiter
    (on_earth/(11.862615)).round(2)
  end

  def on_saturn
    (on_earth/(29.447498)).round(2)
  end

  def on_uranus
    (on_earth/(84.016846)).round(2)
  end

  def on_neptune
    (on_earth/(164.79132)).round(2)
  end
end