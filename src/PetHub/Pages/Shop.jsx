import { useState } from "react";
import { pets } from "../Components/FeaturedData";
import "./Shop.css";

function Shop() {

    const [category, setCategory] = useState("all");
    const [search, setSearch] = useState("");

    const allPets = [
        ...pets.dogs.map((pet) => ({ ...pet, category: "dog" })),
        ...pets.cats.map((pet) => ({ ...pet, category: "cat" })),
        ...pets.birds.map((pet) => ({ ...pet, category: "bird" })),
        ...pets.fishes.map((pet) => ({ ...pet, category: "fish" }))
    ];

    const filteredPets = allPets.filter((pet) => {

        const matchesCategory =
            category === "all" ||
            pet.category === category;

        const matchesSearch =
            pet.name.toLowerCase()
                .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="shop">

            {/* Hero Section */}
            <section className="shop-hero">
                <h1>Find Your Perfect Companion</h1>
                <p>
                    Healthy pets, affordable prices, and lifelong friendship.
                </p>
            </section>

            {/* Search Bar */}
            <section className="search-section">
                <input
                    type="text"
                    placeholder="🔍 Search pets..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </section>

            {/* Category Filters */}
            <section className="filter-section">

                <button
                    className={category === "all" ? "active" : ""}
                    onClick={() => setCategory("all")}
                >
                    All Pets
                </button>

                <button
                    className={category === "dog" ? "active" : ""}
                    onClick={() => setCategory("dog")}
                >
                    Dogs
                </button>

                <button
                    className={category === "cat" ? "active" : ""}
                    onClick={() => setCategory("cat")}
                >
                    Cats
                </button>

                <button
                    className={category === "bird" ? "active" : ""}
                    onClick={() => setCategory("bird")}
                >
                    Birds
                </button>

                <button
                    className={category === "fish" ? "active" : ""}
                    onClick={() => setCategory("fish")}
                >
                    Fishes
                </button>

            </section>

            {/* Pets Grid */}
            <section className="pet-grid">

                {filteredPets.map((pet) => (
                    <div className="pet-card" key={pet.id}>

                        <div className="pet-image">
                            <img
                                src={pet.image}
                                alt={pet.name}
                            />
                        </div>

                        <div className="pet-details">
                            <h3>{pet.name}</h3>
                            <p className="price">
                                ₹{pet.price}
                            </p>

                            <button className="buy-btn">
                                View Details
                            </button>
                        </div>

                    </div>
                ))}

            </section>

            {filteredPets.length === 0 && (
                <h2 className="no-result">
                    No pets found 😔
                </h2>
            )}

        </div>
    );
}

export default Shop;