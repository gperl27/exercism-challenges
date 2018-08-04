defmodule Words do
  @doc """
  Count the number of words in the sentence.

  Words are compared case-insensitively.
  """
  @spec count(String.t()) :: map
  def count(sentence) do
    sentence
    |> String.replace(~r/[.,\/#!$%\^&\*;:{}=\`~()@]/, "")
    |> String.downcase
    |> String.split([" ", "_"], trim: true)
    |> Enum.reduce(%{},
        fn word, countMap ->
          case Map.fetch(countMap, word) do
            {:ok, count} -> Map.update(countMap, word, count, &(&1 + 1))
            :error -> Map.put(countMap, word, 1)
          end
        end
      )
  end
end

# ["word"] => ${"word" => 0}
