import { BlogCard } from "./blogcard";


export function CardGrid({ cards = [] }) {  // Added default value here
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cards.map((card, index) => (
                console.log(card),
                <BlogCard key={index} title={card.title} content={card.content} imagePath={card.img} />
            ))}
        </div>
    );
}