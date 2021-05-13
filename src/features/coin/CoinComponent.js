const CoinComponent = ({
id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
      <div>
        {id} {name} {price} {symbol} {marketcap}  {volume} {image} {priceChange}
        </div>
  );
}

export default CoinComponent;