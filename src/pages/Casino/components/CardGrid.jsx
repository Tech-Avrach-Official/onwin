
const CardGrid = ({ cards }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-sm shadow hover:shadow-lg transition transform hover:-translate-y-1 overflow-hidden cursor-pointer"
        >
          <div className="p-2">
  <img src={card.image} alt={card.name} className="w-full h-36 object-cover rounded" />
</div>
          <div className="p-2 text-center text-sm font-semibold">{card.name}</div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
