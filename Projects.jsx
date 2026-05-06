
function Projects({ projetos }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Projetos</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 hover:shadow-lg transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2">
              {projeto.nome}
            </h3>

            <p className="text-gray-600 mb-2">
              {projeto.descricao}
            </p>

            <p className="text-sm text-blue-600 font-medium">
              {projeto.tecnologias}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
