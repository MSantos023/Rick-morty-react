export default function characters(props) {
    const { characters, setCharacters } = props
    const resetCharacters = () => {
        setCharacters(null)
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={resetCharacters}> Volver a Inicio</span>
            <div className="container-charcters">
                {characters.map((characters, index) => (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={characters.image} alt={characters.name} />
                        </div>
                        <div>
                            <h3>{characters.name}</h3>
                            <h6>
                                {characters.status === "Alive" ? (
                                    <>
                                        <span className="alive"/>Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead"/> Dead                                                                               
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{characters.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{characters.species}</span>
                            </p>
                            <p>
                                <span className="text-grey">Genero: </span>
                                <span>{characters.gender}</span>
                            </p>
                            <p>
                                <span className="text-grey">Planeta de Origen: </span>
                                <span>{characters.origin.name}</span>
                            </p>
                            <p>
                                <span className="text-grey">Ubicacion Actual: </span>
                                <span>{characters.location.name}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <span className="back-home" >Volver a Inicio</span>
        </div>
    )
}
