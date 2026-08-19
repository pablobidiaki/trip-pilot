import AccomodationCard from "./AccomodationCard"

export default function Accommodation() {
    const hoteis = [
        { days: "Dia 1 - 3", name: "Hotel B&B Firenze city center", address: "Centro Historico, florenca", text: "Quartos modernos e confortaveis, cafe da manha incluso e localizacao impecavel para explorar a cidade", price: 85 },
        { days: "Dia 4 - 6", name: "Hotel B&B Firenze city center", address: "Centro Historico, florenca", text: "Quartos modernos e confortaveis, cafe da manha incluso e localizacao impecavel para explorar a cidade", price: 85 },
        { days: "Dia 7 - 9", name: "Hotel B&B Firenze city center", address: "Centro Historico, florenca", text: "Quartos modernos e confortaveis, cafe da manha incluso e localizacao impecavel para explorar a cidade", price: 85 }

    ]

    return (
        <div className="max-w-9/12 mx-auto ">
            {hoteis.map(hotel => (
                <AccomodationCard key={hotel.days}
                                  image="/imgs/ready_guides/italy.jpg"
                                  days={hotel.days}
                                  name={hotel.name}
                                  address={hotel.address}
                                  text={hotel.text}
                                  price={hotel.price}
                />
            ))}
        </div>
    )
}