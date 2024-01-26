import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export const Home = () => {
    const [data, setData] = useState([]);
    const [limit, setLimit] = useState(4);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            setLoading(true); // Set loading to true before making the API request
            setError(null);
            axios
                .get(
                    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
                )
                .then((res) => {
                    setData(res.data);
                    setLoading(false); // Set loading to false when data is successfully loaded
                })
                .catch((err) => {
                    console.log(err);
                    setError("Error fetching data. Please try again.");
                    setLoading(false); // Set loading to false in case of an error
                });
        }
        catch (error) {
            console.error("Error while Fetching ", error);
            setError("Error fetching data. Please try again.");
            setLoading(false);
        }
    }, [limit, page]);


    const handleDelete = (id) => {
        try {
            axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => { console.log(res); alert(`Id: ${id} Deleted Successfully`) })
                .catch((err) => console.log.log(err))
        }
        catch (error) {
            console.log('error while deleting')
        }
    }
    return (
        <div>
            <div className="top">
                <select onChange={(e) => setLimit(e.target.value)}>
                    <option value={4}>Limit view</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
                <select onChange={(e) => setLimit(e.target.value)}>
                    <option value={4}>Limit view</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                </select>
            </div>
         <div className="top">
                
            </div>
            {error && <h1>{error}</h1>}
            {loading ? (
                <h1>Loading....</h1>
            ) : (
                <div className="box">
                    {data.map((el) => (
                        <div className="child" key={el.id}>
                            <img
                                src="https://tse2.mm.bing.net/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain"
                                alt="Avatar"
                            />
                            <h2>Id : {el.id}</h2>
                            {/* <h2>Name : {el.name}</h2> */}
                            <h2>First Name: {el.name.split(' ')[0]}</h2>
                            <h2>Last Name: {el.name.split(' ').slice(1).join(' ')}</h2>
                            <h4>Email : {el.email}</h4>
                            <h5>Company : {el.company.name}</h5>
                            <Link to={`/edit/${el.id}`} ><button className="edit" >Edit</button></Link>
                            <button onClick={() => handleDelete(el.id)} className="delete">Delete</button>
                        </div>
                    ))}
                </div>
            )}

            <div className="buttonbox">
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Prev
                </button>
                <button>{page}</button>
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={page === Math.ceil(10 / limit)}
                >
                    Next
                </button>
            </div>
        </div>
    );
}


