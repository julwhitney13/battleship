defmodule Battleship.Game do
  def new do
    %{
      board: %{},
      guesses: [],
      misses: %{},
    }
  end

  def client_view(game) do
    gs = game.guesses
    ws = game.board
    %{
      hits: Enum.filter(gs, &(Map.has_key?(ws, &1))),
      misses: Enum.filter(gs, &(!Map.has_key?(ws, &1))),
    }
  end

  def skeleton(word, guesses) do
    Enum.map word, fn cc ->
      if Enum.member?(guesses, cc) do
        cc
      else
        "_"
      end
    end
  end

  def guess(game, coord) do

    gs = game.guesses
    |> MapSet.new()
    |> MapSet.put(coord)
    |> MapSet.to_list

    Map.put(game, :guesses, gs)
  end

  def max_guesses do
    12
  end

end
