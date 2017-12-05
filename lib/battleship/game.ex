defmodule Battleship.Game do
  def new do
      %{
          board: [],
          guesses: [],
          ships_placed: %{
                  '5': [],
                  '4': [],
                  '30': [],
                  '31': [],
                  '2': []
            },
          ships_to_place: [5, 4, 30, 31, 2],
          hits: [],
          misses: [],
       }
  end

  def place(game, c, o, s) do
      Map.get(game.ships_placed, s)
      Map.put(game.ships_placed, s, %{c: o})
  end

  def client_view(game) do
    gs = game.guesses
    ws = game.board
    %{
      ships_to_place: game.ships_to_place,
      hits: Enum.filter(gs, &(Enum.member?(ws, &1))),
      misses: Enum.filter(gs, &(!Enum.member?(ws, &1))),
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

end
