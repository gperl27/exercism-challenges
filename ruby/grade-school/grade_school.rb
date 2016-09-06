class School
  def initialize
    @students = []
  end

  def students(the_grade)
    students = []
    @students.each {|student|
      if student[:grade] == the_grade
        students << student[:name]
      end
    }
    students.sort
  end

  def add(name, grade)
    student_and_grade = {}
    student_and_grade[:name] = name
    student_and_grade[:grade] = grade
    @students << student_and_grade
  end

  def students_by_grade
    if @students.length == 0
      return []
    end

    grades_array = @students.map {|student|
      student[:grade]
    }.uniq

    student_arr = []

    grades_array.each {|grade|
      student_hash = {:grade=>grade, :students=>[]}
      @students.each {|student|
        if grade == student[:grade]
          student_hash[:students] << student[:name]
          student_hash[:students].sort!
          student_arr << student_hash
        end
      }
    }

    student_arr.uniq!.sort_by {|hsh| hsh[:grade]}
  end
end

module BookKeeping
    VERSION = 3
end
