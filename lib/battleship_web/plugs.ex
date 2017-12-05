# Received help from Dylan Pincus with writing this plug (his code: https://github.com/lohikansun/battleship/)

defmodule BattleshipWeb.Plugs do
    import Plug.Conn

    def fetch_user(conn, _opts) do
      user = get_session(conn, :user)
      if user do
        token = Phoenix.Token.sign(BattleshipWeb.Endpoint, "user", user)
        conn
        |> assign(:user_name, user)
        |> assign(:user_token, token)
      else
        conn
        |> assign(:user_name, nil)
        |> assign(:user_token, nil)
      end
    end

    def fetch_game(conn, _opts) do
      game = get_session(conn, :gamecode)
      if game do
        token = Phoenix.Token.sign(BattleshipWeb.Endpoint, "game", game)
        conn
        |> assign(:game_code, game)
      else
        conn
        |> assign(:game_code, nil)
      end
    end
end
