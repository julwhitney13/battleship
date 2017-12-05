defmodule BattleshipWeb.PageController do
  use BattleshipWeb, :controller

  def login(conn, %{"username" => username}) do
      conn
      |> put_session(:user, username)
      |> put_flash(:info, "You're logged in as #{username}")
      |> redirect(to: page_path(conn, :index))
  end

  def joingame(conn, %{"gamecode" => gamecode}) do
      conn
      |> put_session(:gamecode, gamecode)
      |> put_flash(:info, "You've joined game #{gamecode}")
      |> redirect(to: page_path(conn, :index))
  end

  def index(conn, _params) do
      render conn, "index.html"
  end
end
