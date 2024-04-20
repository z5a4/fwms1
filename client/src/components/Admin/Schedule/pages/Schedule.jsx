import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FSchedule from '../functions/FSchedule';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import CurrentRoutes from '../../Route/pages/CurrentRoutes';
import { Button, Typography } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';

const Schedule = () => {
    const [combinedRequests, setCombinedRequests] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [selectedRoutes, setSelectedRoutes] = useState('');  
    const [showRoute, setShowRoute] = useState(false);
   const [error, setError] = useState(null);
    const { fetchCombinedRequests, handleInputChange} = FSchedule();
    
 
    useEffect(() => {
        
        async function fetchData() {
            try {
                const combinedData = await fetchCombinedRequests();
                setCombinedRequests(combinedData);
            } catch (error) {
                setError(error.message);
            }
        }
    
       
    
        fetchData();
        
    
        const intervalId = setInterval(() => {
            fetchData();
        }, 60000);
    
        return () => clearInterval(intervalId);


    },[fetchCombinedRequests]);


  useEffect(() => {
    async function fetchRoutes() {
      try {
        const response = await fetch('http://localhost:5000/api/routes/current');
        const data = await response.json();
        setRoutes(data.routeNames);
      } catch (error) {
        console.error('Error fetching routes:', error);
      }
    }

    fetchRoutes();
  }, []);

    

    const handleViewRoute = () => {
        setShowRoute(true);
       
    };

const handleRouteChange = (event, requestId) => {
    setSelectedRoutes(prevState => ({
      ...prevState,
      [requestId]: event.target.value
    }));
  };

  
  const handleAddToCurrentSchedule = async (requestData) => {
    try {
        const requestDataWithRoute = { ...requestData, routeName: selectedRoutes[requestData._id] };
         
requestDataWithRoute.status = 'Approved';
        const response = await axios.post('http://localhost:5000/api/currentschedule', requestDataWithRoute);

        alert(response.data.message);
    } catch (error) {
        console.error('Error adding to current schedule:', error);
        alert('Failed to add request to current schedule. Please try again.');
    }
};


   
    return (
        <>
            <div className="container mt-5 pt-5">
                <Typography variant='h3' className="text-center mb-3">Regular And Occasional FW Request Table</Typography>
                <div className="d-flex justify-content-center mb-3">
                    <Link to="/adminRegularFWRequestform"><Button className="me-2" color="green">Add New</Button></Link>
                    <Button color="light-blue" size="lg" onClick={() => window.history.back()}>Back</Button>
                </div>
                {error && <p className="text-danger">{error}</p>}
                <table className="table-auto w-full border border-collapse rounded">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="px-4 py-2" >Request ID</th>
                            <th className="px-4 py-2">Organisation Name</th>
                            <th className="px-4 py-2">Description</th>
                            <th className="px-4 py-2">Requester Name</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Address</th>
                            <th className="px-4 py-2">Mobile No</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">approxQuantity</th>
                            <th className="px-4 py-2">Add Route</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {combinedRequests.map(request => (
                            <tr key={request._id}>
                                <td className="border px-4 py-2">{request.requestId}</td>
                                <td className="border px-4 py-2">{request.organisationName || '-'}</td>
                                <td className="border px-4 py-2">{request.description || '-'}</td>
                                <td className="border px-4 py-2">{request.requesterName}</td>
                                <td className="border px-4 py-2">{request.date}</td>
                                <td className="border px-4 py-2">{request.address}</td>
                                <td className="border px-4 py-2">{request.mobileNo}</td>
                                <td className="border px-4 py-2">{request.email}</td>
                                <td className="border px-4 py-2">{request.approxQuantity}</td>
                                <td className="border px-4 py-2">
                                <label htmlFor={`routeSelect-${request._id}`}>Select Route:</label>
      <select id={`routeSelect-${request._id}`} value={selectedRoutes[request._id] || ''} onChange={(e) => handleRouteChange(e, request._id)}>
        <option value="">Select a route</option>
        {routes.map((route, index) => (
          <option key={index} value={route}>{route}</option>
        ))}
      </select>
      {selectedRoutes[request._id] && <p>Selected Route: {selectedRoutes[request._id]}</p>}
                            
                              </td>
                              <td>
                                {request.status}
                              </td>
                              <td>
                              <button type='button'className='bg-green' onClick={() => handleAddToCurrentSchedule(request)}>Add</button>
                                </td>
                             </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center mt-3">
                    <Button onClick={handleViewRoute} color='green' className="me-2">View Route</Button>
                    <Link to="/adminrouteform">
                    <Button color="light-blue" className="mr-2">
                        Add New
                      </Button>
                    </Link>
                    </div>

                {showRoute && <CurrentRoutes/>}
               
              
            </div>
           <Footer/>
        </>
    );
};

export default Schedule;
