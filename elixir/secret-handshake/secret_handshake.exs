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
    intToBinary code
  end

  def intToBinary code do
    
    # {numToBinary, _} = code |> Integer.to_string(2) |> Integer.parse

    {_, handshake} = Enum.reduce([
      {16, "reverse"},
      {8, "jump"},
      {4, "close your eyes"},
      {2, "double blink"},
      {1, "wink"}
    ], {code, []}, 
      fn {binary, action}, {code, commands} ->
        setBits = rem(code, binary)
        
        cond do
          binary > code -> {code, commands}
          setBits >= 0 -> {setBits, [action | commands]}
          true -> {0 , commands}
        end
      end
    )

    findReverse = fn x -> x == "reverse" end

    IO.inspect(Enum.any? handshake, findReverse)

    cond do
      Enum.any? handshake, findReverse -> Enum.reject(handshake, findReverse) |> Enum.reverse
      true -> handshake
    end
  end
end
