defmodule BattleshipWeb.PlayerChannel do
    use BattleshipWeb, :channel
    alias Battleship.Game
    alias Battleship.GameAgent

    def join("player:" <> name, %{"code" => code}, socket) do
        game = GameAgent.get(name) || Game.new()
        GameAgent.put(name, game)
        socket = socket
        |> assign(:name, name)
        {:ok, Game.client_view(game), socket}
    end

    def handle_in("guess", %{"coord" => ll}, socket) do
      name = socket.assigns[:name]
      game = name
      |> GameAgent.get()
      |> Game.guess(ll)
      GameAgent.put(name, game)
      {:reply, {:ok, Game.client_view(game)}, socket}
    end

    def handle_in("place", %{"coord" => ll, "orient" => o, "ship" => s}, socket) do
      name = socket.assigns[:name]
      game = name
      |> GameAgent.get()
      |> Game.place(ll, o, s)
      GameAgent.put(name, game)
      {:reply, {:ok, Game.client_view(game)}, socket}
    end


end
