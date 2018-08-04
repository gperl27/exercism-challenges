defmodule RotationalCipher do
  @doc """
  Given a plaintext and amount to shift by, return a rotated string.

  Example:
  iex> RotationalCipher.rotate("Attack at dawn", 13)
  "Nggnpx ng qnja"
  """
  

  @spec rotate(text :: String.t(), shift :: integer) :: String.t()
  def rotate(text, shift) do
    text
    |> String.codepoints
    |> Enum.map(
      fn letter ->
        cond do
          String.match?(letter, ~r/([A-Za-z])/) -> handle_rotation {letter, shift}
          true -> letter
        end
      end
    )
    |> Enum.join
  end

  defp handle_rotation {letter, shift} do
    <<code::utf8>> = letter
    modified_code = code + rem(shift, 26)

    if above_upper_bound? {modified_code, letter} do
      <<modified_code - 26::utf8>>
    else
      <<modified_code::utf8>> 
    end
  end

  defp above_upper_bound? {code, letter} do
    if String.upcase(letter) == letter do
      code > ?Z
    else
      code > ?z
    end
  end
end
