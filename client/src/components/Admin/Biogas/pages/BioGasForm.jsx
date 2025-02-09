import React from 'react';
import { Input, Button, Typography } from '@material-tailwind/react';
import FBioGasForm from '../functions/FBioGasForm';
import AdminNavbar from '../../AdminNavbar';
import Footer from '../../../Footer/Footer';
import {Alert} from '@material-tailwind/react';

const BioGasForm = () => {
  const { formData,  handleInputChange, handleSubmit,errorMessage ,biogasId} = FBioGasForm();
  const [open, setOpen] = React.useState(true);

  return (
    <>
      <AdminNavbar />
      <div className='pt-3 content-center pr-32 pl-32'>
         {errorMessage && <Alert  open={open}
        onClose={() => setOpen(false)}
        animate={{
          mount: { y: 0 },
          unmount: { y: 100 },
        }} className="rounded-none border-l-4 border-[#c92e2e] bg-[#dcc0c1] font-medium text-[#c92e2e]">{errorMessage}.Please fill in all fields</Alert>}
       
     </div>
      <div className="container mt-4 border border-gray-400 rounded p-4 pl-6 pr-6">
        <Typography variant='h3' className="text-center mb-4">Add Biogas Plant</Typography>
        <form onSubmit={handleSubmit}>
          <table className="table table-bordered">
            <tbody>
             
              <tr>
                <td className="form-label font-bold">Biogas Name:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasName"
                    value={formData.biogasName}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Name"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Address:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasAddress"
                    value={formData.biogasAddress}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Address"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Mobile No:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasMobileNo"
                    value={formData.biogasMobileNo}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Mobile No"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Email:</td>
                <td>
                  <Input
                    type="email"
                    name="biogasEmail"
                    value={formData.biogasEmail}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Email"
                    variant="standard"
                  />
                </td>
              </tr>
              <tr>
                <td className="form-label font-bold">Biogas Slurry Limit:</td>
                <td>
                  <Input
                    type="text"
                    name="biogasSlurryLimit"
                    value={formData.biogasSlurryLimit}
                    onChange={handleInputChange}
                    size="md"
                    placeholder="Biogas Slurry Limit"
                    variant="standard"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="text-center mt-4">
            <Button type="submit" color="green" size="md" className="me-2" onClick={() => setOpen(true)}>
              Create Biogas
            </Button>
            <Button color="light-blue" size="lg" onClick={() => window.history.back()}>Back</Button>
          </div>
        </form>
      </div>
    
      <Footer />
    </>
  );
};

export default BioGasForm;
