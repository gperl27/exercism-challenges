defmodule Strain do
  @doc """
  Given a `list` of items and a function `fun`, return the list of items where
  `fun` returns true.

  Do not use `Enum.filter`.
  """
  @spec keep(list :: list(any), fun :: (any -> boolean)) :: list(any)
  def keep(list, fun) do
    list
    |> Enum.reduce([], &custom_filter(&1, &2, fun, :true))
    |> Enum.reverse
  end

  @doc """
  Given a `list` of items and a function `fun`, return the list of items where
  `fun` returns false.

  Do not use `Enum.reject`.
  """
  @spec discard(list :: list(any), fun :: (any -> boolean)) :: list(any)
  def discard(list, fun) do
    list
    |> Enum.reduce([], &custom_filter(&1, &2, fun, :false))
    |> Enum.reverse
  end

  defp custom_filter val, acc, fun, conditional do
    cond do
      fun.(val) == conditional -> [val | acc]
      true -> acc
    end
  end
end
