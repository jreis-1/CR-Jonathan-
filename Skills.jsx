
function Skills({ habilidades }) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center"> Habilidades</h2>

      <div className="flex flex-wrap gap-2">
        {habilidades.map((habilidade, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            {habilidade}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
