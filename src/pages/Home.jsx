import { useQuery } from '@tanstack/react-query';
import Axios from "axios";
import { useContext } from "react"
import { AppContext } from "../App"

export const Home = () => {
    const { userName } = useContext(AppContext);
  const { data: catData, isLoading, isError, refetch } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>Sorry, there was an error</h1>
  }

  return <h1>this is the home page and the user name is: {userName} {catData?.fact}
  <button onClick={refetch}>UPDATED DATA</button>
  </h1>
}
