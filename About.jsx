
function About({ user }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-4 text-center">
  Sobre Mim
</h2>

      <p className="mb-2">
        <span className="font-semibold">Nome:</span> {user.nome}
      </p>

      <p className="mb-2">
        <span className="font-semibold">Descrição:</span> {user.descricao}
      </p>

      <p>
        <span className="font-semibold">Área:</span> {user.area}
      </p>
    </section>
  );
}

export default About;
