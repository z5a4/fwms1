import React from 'react';
import UserFTransporterForm from '../functions/UserFTransporterForm';
import { Button, Typography, Input } from '@material-tailwind/react';
import Footer from '../../../Footer/Footer';


const UserTransporterForm = () => {
  const { formData, errors, handleInputChange, handleSubmit } = UserFTransporterForm();

  return (
    <>
    <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
      <Typography variant='h3' className="text-center mb-4">Become our transporter..</Typography>
      <form onSubmit={handleSubmit}>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>
                <label htmlFor="transporterId" className="font-bold form-label">Transporter ID:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="transporterId"
                  name="transporterId"
                  placeholder="Enter Transporter ID"
                  value={formData.transporterId}
                  onChange={handleInputChange}
                />
                {errors.transporterId && <span className="text-danger">{errors.transporterId}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="vehicleNo" className="font-bold form-label">Vehicle No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="vehicleNo"
                  name="vehicleNo"
                  placeholder="Enter Vehicle No"
                  value={formData.vehicleNo}
                  onChange={handleInputChange}
                />
                {errors.vehicleNo && <span className="text-danger">{errors.vehicleNo}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="vehicleType" className="font-bold form-label">Vehicle Type:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="vehicleType"
                  name="vehicleType"
                  placeholder="Enter Vehicle Type"
                  value={formData.vehicleType}
                  onChange={handleInputChange}
                />
                {errors.vehicleType && <span className="text-danger">{errors.vehicleType}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="driverName" className="font-bold form-label">Driver Name:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="driverName"
                  name="driverName"
                  placeholder="Enter Driver Name"
                  value={formData.driverName}
                  onChange={handleInputChange}
                />
                {errors.driverName && <span className="text-danger">{errors.driverName}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="licenseNo" className="font-bold form-label">License No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="licenseNo"
                  name="licenseNo"
                  placeholder="Enter License No"
                  value={formData.licenseNo}
                  onChange={handleInputChange}
                />
                {errors.licenseNo && <span className="text-danger">{errors.licenseNo}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="mobileNo" className="font-bold form-label">Mobile No:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Enter Mobile No"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                />
                {errors.mobileNo && <span className="text-danger">{errors.mobileNo}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="email" className="font-bold form-label">Email:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <span className="text-danger">{errors.email}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="address" className="font-bold form-label">Address:</label>
              </td>
              <td>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={4}
                  className="border border-gray-300 p-2 rounded-md w-full"
                />
                {errors.address && <span className="text-danger">{errors.address}</span>}
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="rentRate" className="font-bold form-label">Rent Rate:</label>
              </td>
              <td>
                <Input
                  variant='standard'
                  type="text"
                  id="rentRate"
                  name="rentRate"
                  placeholder="Enter Rent Rate"
                  value={formData.rentRate}
                  onChange={handleInputChange}
                />
                {errors.rentRate && <span className="text-danger">{errors.rentRate}</span>}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center mt-4">
          <Button type="submit" color="green" size='lg' className="mr-2" onClick={handleSubmit}>Create Transporter</Button>
          <Button color="light-blue" size="lg" className="ms-2" onClick={() => window.history.back()}>Back</Button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default UserTransporterForm;
