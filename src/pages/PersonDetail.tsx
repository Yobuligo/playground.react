import { useParams } from "react-router-dom";

const PersonDetail: React.FC = () => {
  const params = useParams<{ id: string }>();
  return (
    <>
      <h1>{`(${params.id})`}</h1>
    </>
  );
};

export default PersonDetail;
