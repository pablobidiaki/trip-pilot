export default function NextTrip() {
    const continents = [
        { id: "North America", label: "América do Norte" },
        { id: "South America", label: "América do Sul" },
        { id: "Europe", label: "Europa" },
        { id: "Africa", label: "África" },
        { id: "Asia", label: "Ásia" },
        { id: "Oceania", label: "Oceania" },
        { id: "Antarctica", label: "Antártida" },
    ];

    return (
        <div className="relative flex h-96 flex-col overflow-hidden mt-15">
            <img
                src="/imgs/nextTrip/background.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover brightness-20"
            />

            <p className="relative z-10 pt-15 text-center text-7xl font-semibold text-white font-serif italic"> Qual seu próximo destino?</p>
            <p className="text-lg font-light relative z-10 mt-4 text-center text-gray-300">Escolha um continente para visualizar nossos roteiros prontos!</p>

            <div className="relative z-10 flex flex-1 flex-wrap justify-evenly mt-15">
                {continents.map((continent) => (
                    <button
                        key={continent.id}
                        type="button"
                        className="w-55 text-xl cursor-pointer rounded-lg h-fit bg-background-color p-3 text-black transition-all duration-300 hover:scale-101"
                    >
                        {continent.label}
                    </button>
                ))}
            </div>
        </div>
    );
}