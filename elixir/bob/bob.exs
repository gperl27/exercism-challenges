defmodule Bob do
  def ends_with_question_mark? str do
    String.ends_with?(str, "?")
  end

  def is_shouting? str do
    is_all_caps?(str) && !ends_with_question_mark?(str)
  end

  def is_all_caps? str do
    String.equivalent?(
      str,
      String.upcase(str)
    )
  end

  def ends_with_exclamation? str do
    String.ends_with?(str, "!")
  end

  def is_empty? str do
    String.trim(str) |> String.length === 0
  end

  def has_numbers_only? str do
    String.match?(str, ~r/^[^a-zA-Z]*$/)
  end

  def is_not_english? str do
    String.match?(str, ~r/[^\x00-\x7F]+/)
  end

  def hey(input) do
    cond do
      is_empty?(input) -> "Fine. Be that way!"
      is_shouting?(input) && !has_numbers_only?(input) || is_not_english?(input) -> "Whoa, chill out!"
      is_all_caps?(input) && !has_numbers_only?(input) -> "Calm down, I know what I'm doing!"
      ends_with_question_mark?(input) -> "Sure."
      true -> "Whatever."
    end
  end
end
