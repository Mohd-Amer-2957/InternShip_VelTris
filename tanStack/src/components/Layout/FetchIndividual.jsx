import { useQuery } from "@tanstack/react-query";
import { fetchIndividualPost } from "../../API/api";
import { NavLink, useParams } from "react-router-dom";

const FetchIndividual = () => {

    const { id } = useParams();
    const { data, isPending, isError, error } = useQuery({
        queryKey: ["post"],                                      // useState
        queryFn: () => fetchIndividualPost(id),                    // useEffect
    });


    // console.log(data);
    if (isPending) return <p>Loading... please wait</p>
    if (isError) return <p>{error}   </p>  || <p>Something went wrong..!!!</p>

    return (
        <div><h2>Individual post {id}  </h2>
            <center><p> {data.title}</p><p> {data.body}</p>
            </center>

            <NavLink to="/rq">
                <button>Go Back</button>
            </NavLink>
        </div>
    )
}

export default FetchIndividual