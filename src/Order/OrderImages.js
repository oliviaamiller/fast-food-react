export default function OrderImages({ foodId, sideId, drinkId }) {
  return <div>
    <img src={`./Images/food-${foodId}.png`}/>
    <img src={`./Images/side-${sideId}.png`}/>
    <img src={`./Images/drink-${drinkId}.png`}/>
  </div>;
}
