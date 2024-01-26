
import { Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Spinner } from '@chakra-ui/react'
import PersonIcon from '@mui/icons-material/Person';
import BadgeIcon from '@mui/icons-material/Badge';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
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
            </div>
            {error && <h1>{error}</h1>}
            {loading ? (<div className="loader">
                <h1>Loading....</h1>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </div>
            ) : (
                <div className="box">
                    {data.map((el) => (
                        <div className="child" key={el.id}>
                            <img
                                src="https://tse2.mm.bing.net/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain"
                                alt="Avatar"
                            />
                            <div style={{ display: 'flex', alignItems: 'center', fontSize: '25px' }}>
                                <BadgeIcon style={{ marginRight: '4px',fontWeight: 'bold', color: 'black' }} />
                                : {el.id}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PersonIcon style={{ marginRight: '9px',fontWeight: 'bold', color: 'black', fontSize: 'large' }} />
                                : {el.name}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon style={{ marginRight: '9px',fontWeight: 'bold', color: 'black', fontSize: 'large' }} />
                                : {el.email}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon style={{ marginRight: '9px',fontWeight: 'bold', color: 'black', fontSize: 'large' }} />
                                : {el.phone.split(' ')[0]}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <BusinessIcon style={{ marginRight: '9px',fontWeight: 'bold', color: 'black', fontSize: 'large' }} />
                                : {el.company.name}
                            </div>
                            <Link to={`/edit/${el.id}`} ><button className="edit" >Edit</button></Link>
                            <button onClick={() => handleDelete(el.id)} className="delete">Delete</button>
                        </div>
                    ))}
                </div>
            )}

            <div className="buttonbox">
                <Button colorScheme='teal' variant='outline' onClick={() => setPage(page - 1)} isDisabled={page === 1}>
                    Prev
                </Button>
                <Button colorScheme='teal' variant='outline' >{page}</Button>
                <Button colorScheme='teal' variant='outline'
                    onClick={() => setPage(page + 1)}
                    isDisabled={page === Math.ceil(10 / limit)}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}


