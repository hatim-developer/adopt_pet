import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Hello: {id}</h2>
    </div>
  );
};

export default Details;
