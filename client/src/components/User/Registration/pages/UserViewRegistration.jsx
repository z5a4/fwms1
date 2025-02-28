import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button,Typography } from '@material-tailwind/react';
import FViewRegistrations from '../functions/UserFViewRegistration';
import UserNavbar from '../../UserNavbar';
import Footer from '../../../Footer/Footer';


function UserViewRegistrations() {
  const { registrations, error } = FViewRegistrations();
  const navigate = useNavigate();

  const handleUpdate = (registration) => {
    navigate(`/update/${registration._id}`, { state: { registration } });
  };

  return (
    <>
    <UserNavbar/>
      <div className="container mt-4 pt-4">
        <Typography variant='h3' className="text-center mb-3">Registrations</Typography>
        <div className="flex justify-center mb-3">
          <Link to="/usercommonregistration">
            <Button className='mr-2' color="green" >
              Add New
            </Button>
          </Link>
          <Link to="/user">
            <Button color="light-blue" >
              Back
            </Button>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <table className="table-auto w-full text-center">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Mobile No</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Username</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(registration => (
              <tr key={registration._id} className="text-center">
                <td className="px-4 py-2">{registration.name}</td>
                <td className="px-4 py-2">{registration.email}</td>
                <td className="px-4 py-2">{registration.mobileNo}</td>
                <td className="px-4 py-2">{registration.address}</td>
                <td className="px-4 py-2">{registration.dateOfBirth}</td>
                <td className="px-4 py-2">{registration.username}</td>
                <td className="px-4 py-2">
                  <div className="flex justify-center">
                    <Button color="green" size="sm" className="me-2" onClick={() => handleUpdate(registration)}>
                      Edit
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </>
  );
}

export default UserViewRegistrations;
