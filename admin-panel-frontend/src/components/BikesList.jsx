import Bike from "./Bike";

const BikesList = ({ bikes }) => {
  return (
    <div>
      {bikes.map((bike) => (
        <Bike key={bike.id} bike={bike} />
      ))}
    </div>
  );
};

export default BikesList;