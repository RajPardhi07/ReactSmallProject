

const Card1 = () => {

    const cards = [
        {
            name: "Summary",
            total: 21,
            description: "Due Tasks",
            footer: "Completed 13",
            more: "More Information"
        },
        {
            name: "overdue",
            total: 17,
            description: "Project",
            footer: "yesterday 9",
            more: "More Information"
        },
        {
            name: "features",
            total: 38,
            description: "Proposals",
            footer: "Implemented 6",
            more: "More Information"
        },
    ];






    return (
        <section className="page card-1-page">
            <div className="cards">
                {cards.map((card, index) => (
                    <label key={index} id={card.name}>
                        <input type="checkbox" />
                        <div className="card">
                            <div className="front">
                                <header>
                                    <h2>{card.name}</h2>
                                    <span className="material-symbols-outlined">more vert</span>
                                </header>
                                <var>{card.total}</var>
                                <h3>{card.description}</h3>
                                <h4>{card.footer}</h4>
                            </div>
                            <div className="back">
                                <header>
                                    <h2>{card.name}</h2>
                                    <span className="material-symbols-outlined">close</span>
                                </header>

                                <p>More Infomation</p>

                            </div>
                        </div>

                    </label>
                ))}

            </div>
        </section>
    )
}

export default Card1