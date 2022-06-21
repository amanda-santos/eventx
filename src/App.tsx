import { gql, useQuery } from "@apollo/client";
import { Event } from "./pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
      teacher {
        name
        bio
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_LESSONS_QUERY);

  console.log(data, loading, error);

  return (
    <>
      <Event />
    </>
  );
}

export default App;
