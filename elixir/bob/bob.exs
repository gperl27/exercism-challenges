defmodule Bob do
  def hey(input) do
    cond do
      empty?(input) -> "Fine. Be that way!"
      shouting?(input) && !numbers_only?(input) || not_english?(input) -> "Whoa, chill out!"
      all_caps?(input) && !numbers_only?(input) -> "Calm down, I know what I'm doing!"
      ends_with_question_mark?(input) -> "Sure."
      true -> "Whatever."
    end
  end

  defp ends_with_question_mark? str do
    String.ends_with?(str, "?")
  end

  defp shouting? str do
    all_caps?(str) && !ends_with_question_mark?(str)
  end

  defp all_caps? str do
    String.equivalent?(
      str,
      String.upcase(str)
    )
  end

  defp ends_with_exclamation? str do
    String.ends_with?(str, "!")
  end

  defp empty? str do
    String.trim(str) |> String.length === 0
  end

  defp numbers_only? str do
    String.match?(str, ~r/^[^a-zA-Z]*$/)
  end

  defp not_english? str do
    String.match?(str, ~r/[^\x00-\x7F]+/)
  end
end
