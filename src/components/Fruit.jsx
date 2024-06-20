const Fruit = ({ name, price, emoji, soldOut }) => {
    return (
        <li>
            {emoji} {name}: ${price} {soldOut ? '| Sold Out' : ''}
        </li>
    );
};

export default Fruit;
