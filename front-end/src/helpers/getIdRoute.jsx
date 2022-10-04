import { useParams } from 'react-router-dom';

function GetIdRoute() {
  const params = useParams();
  return params.id;
}

export default GetIdRoute;
