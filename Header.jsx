
function Header({ nome, titulo }) {
  return (
    <header className="bg-blue-600 text-white p-6 text-center">
      <h1 className="text-3xl font-bold">{nome}</h1>
      <p>{titulo}</p>
    </header>
  );
}
export default Header;
