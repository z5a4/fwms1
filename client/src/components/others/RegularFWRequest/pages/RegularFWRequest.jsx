import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Input, Button } from "@material-tailwind/react";
import FRegularFWRequest from '../functions/FRegularFWRequest';
import AdminNavbar from '../../../Admin/AdminNavbar';
import Footer from '../../../Footer/Footer';

const RegularFWRequest = () => {
  const { formData, requestId, handleInputChange, handleSubmit } = FRegularFWRequest();
  const navigate = useNavigate();

  const getCurrentDate = () => {
    const now = new Date();
    now.setDate(now.getDate() - 1); // Subtract one day from the current date

    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleBack = () => {
    navigate('/');
  };

  useEffect(() => {
    const currentDate = getCurrentDate();
    handleInputChange({ target: { name: 'date', value: currentDate } });
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant="h3" className="text-center mb-4">Regular Food Waste Request</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="reqID" className="block text-sm font-bold text-gray-700">Request ID:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="text" name="requestId" value={requestId} readOnly />
                </td>
                </tr>
                <tr>
                <td>
                  <label htmlFor="Oname" className="block text-sm font-bold text-gray-700">Organisation Name:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="text" name="organisationName" value={formData.organisationName} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="Rname" className="block text-sm font-bold text-gray-700">Requester Name:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="text" name="requesterName" value={formData.requesterName} onChange={handleInputChange} />
                </td>
                </tr>
                <tr>
                <td>
                  <label htmlFor="Tdate" className="block text-sm font-bold text-gray-700">Date :</label>
                  </td>
                  <td>
                  <Input variant='standard' type="date" name="date" value={formData.date} readOnly />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="address" className="block text-sm font-bold text-gray-700">Address:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="text" name="address" value={formData.address} onChange={handleInputChange} />
                </td>
                </tr>
                <tr>
                <td>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="email" name="email" value={formData.email} onChange={handleInputChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="mobileNo" className="block text-sm font-bold text-gray-700">Mobile No:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} />
                </td>
                </tr>
                <tr>
                <td>
                  <label htmlFor="aaproxqty" className="block text-sm font-bold text-gray-700">Approx Quantity:</label>
                  </td>
                  <td>
                  <Input variant='standard' type="text" name="approxQuantity" value={formData.approxQuantity} onChange={handleInputChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-6">
            <Button type="submit" color="green" size="lg" className='mr-2'>Request</Button>
            <Button type="button" color="blue" size="lg" onClick={handleBack}>Back</Button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  )
};

export default RegularFWRequest;
