defmodule BattleshipWeb.UserSocket do
  use Phoenix.Socket

  ## Channels
  # channel "room:*", BattleshipWeb.RoomChannel
  # Player channel referenced from Nat Tuck Hangman Code https://github.com/NatTuck/hangman
  channel "player:lobby", BattleshipWeb.PlayerChannel

  ## Transports
  transport :websocket, Phoenix.Transports.WebSocket
  # transport :longpoll, Phoenix.Transports.LongPoll

  # Socket params are passed from the client and can
  # be used to verify and authenticate a user. After
  # verification, you can put default assigns into
  # the socket that will be set for all channels, ie
  #
  #     {:ok, assign(socket, :user_id, verified_user_id)}
  #
  # To deny connection, return `:error`.
  #
  # See `Phoenix.Token` documentation for examples in
  # performing token verification on connect.
  # def connect(_params, socket) do
  #   {:ok, socket}
  # end

  #  Pheonix Connectreferenced from Nat Tuck Hangman Code https://github.com/NatTuck/hangman
  def connect(%{"token" => token}, socket) do
      case Phoenix.Token.verify(socket, "username", token, max_age: 86400) do
        {:ok, name} ->
          socket = assign(socket, :username, name)
          {:ok, socket}
        {:error, _} ->
          :error
      end
  end

  # Socket id's are topics that allow you to identify all sockets for a given user:
  #
  #     def id(socket), do: "user_socket:#{socket.assigns.user_id}"
  #
  # Would allow you to broadcast a "disconnect" event and terminate
  # all active sockets and channels for a given user:
  #
  #     BattleshipWeb.Endpoint.broadcast("user_socket:#{user.id}", "disconnect", %{})
  #
  # Returning `nil` makes this socket anonymous.
  def id(_socket), do: nil
end
