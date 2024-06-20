import Fruit from './Fruit';

const Fruits = () => {
    const fruits = [
        { name: 'Apple', price: '10', emoji: '🍎' },
        { name: 'Mango', price: '15', emoji: '🥭', soldOut: true },
        { name: 'Strawberry', price: '20', emoji: '🍓' },
        { name: 'Lemon', price: '15', emoji: '🍋' },
        { name: 'Orange', price: '10', emoji: '🍊', soldOut: true },
    ];

    return (
        <ul>
            {fruits.map((fruit) => {
                return (
                    <Fruit
                        key={fruit.name}
                        name={fruit.name}
                        price={fruit.price}
                        emoji={fruit.emoji}
                        soldOut={fruit.soldOut}
                    />
                );
            })}
        </ul>
    );
};

export default Fruits;
