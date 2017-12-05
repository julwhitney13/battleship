# Referenced this tutorial https://medium.com/@miguel.coba/building-a-game-with-phoenix-channels-a3e6b390cfcc

defmodule BattleshipWeb.TableChannel do
  use BattleshipWeb, :channel
  alias Battleship.GameAgent
  alias Phoenix.Socket

  def join("table:lobby", _payload, socket) do
    socket = socket
    {:ok, socket}
  end

  def join("table:" <> gamecode, %{"username" => username}, socket) do
      socket = socket
      |> assign(:gamecode, gamecode)
      {:ok, socket}
  end

  ## for chats
  def handle_in("message", %{"body" => body}, socket) do
    broadcast socket, "message", %{"body" => body}
    {:noreply, socket}
  end

  # # for joining a game
  # def handle_in("new_user", %{"username" => username}, socket) do
  #   broadcast! socket, "new_user", %{username: username}
  #   {:noreply, socket}
  # end

end
