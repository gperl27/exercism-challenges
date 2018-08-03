defmodule SecretHandshake do
  @doc """
  Determine the actions of a secret handshake based on the binary
  representation of the given `code`.

  If the following bits are set, include the corresponding action in your list
  of commands, in order from lowest to highest.

  1 = wink
  10 = double blink
  100 = close your eyes
  1000 = jump

  10000 = Reverse the order of the operations in the secret handshake
  """
  @spec commands(code :: integer) :: list(String.t())
  def commands(code) do
    code 
    |> map_code_to_commands
    |> handle_reversal
  end

  defp map_code_to_commands code do
    Enum.reduce([
      {16, "reverse"},
      {8, "jump"},
      {4, "close your eyes"},
      {2, "double blink"},
      {1, "wink"}
    ], {code, []}, 
      fn {binary, action}, {code, commands} ->
        bits = rem(code, binary)
        
        cond do
          binary > code -> {code, commands}
          bits >= 0 -> {bits, [action | commands]}
          true -> {0 , commands}
        end
      end
    )
  end


  defp handle_reversal {_, handshake} do
    findReverse = &(&1 == "reverse")
    
    cond do
      Enum.any? handshake, findReverse -> Enum.reject(handshake, findReverse) |> Enum.reverse
      true -> handshake
    end
  end
end
