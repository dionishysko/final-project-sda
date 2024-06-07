import React, { useState } from "react";
import { TextField, Button, Typography, Container, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import "./Order.css";

const Order = ({ setOrder }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    city: "",
    neighborhood: "",
    order: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, phoneNumber, city, neighborhood, order } = formData;

    const phoneRegex = /^\d{10}$/;
    const nameRegex = /^[a-zA-ZëËçÇ]+$/;

    if (
      firstName.match(nameRegex) &&
      lastName.match(nameRegex) &&
      phoneNumber.match(phoneRegex) &&
      city &&
      neighborhood &&
      order
    ) {
      setOpenDialog(true);
      resetForm(); 
     
    } else {
      alert("Plotesimi i ketij textfield eshte i detyruar dhe duhet te permbajne vetem shkronja (per emrin dhe mbiemrin) ose 10 shifra (per numrin e telefonit).");
    }
    //Proceed with the registration logic
    const data = JSON.parse(localStorage.getItem('orders') || '[]');
    data.push(formData);
    localStorage.setItem('orders', JSON.stringify(data));
    console.log('Order data:', data);
    // setOrder(false);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      neighborhood: "",
      order: "",
    });
    
  };

  return (
    <>
      <Container maxWidth="sm" className="order-container">
        <Paper elevation={3} className="order-paper">
          <Typography variant="h4" align="center" gutterBottom>
            Porosia e Ushqimit
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              label="Emri"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.firstName}
              onChange={handleChange}
            />
            <TextField
              name="lastName"
              label="Mbiemri"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.lastName}
              onChange={handleChange}
            />
            <TextField
              name="phoneNumber"
              label="Nr. Celulari"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <TextField
              name="city"
              label="Qyteti"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.city}
              onChange={handleChange}
            />
            <TextField
              name="neighborhood"
              label="Rruga"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.neighborhood}
              onChange={handleChange}
            />
            <TextField
              name="order"
              label="Çfarë dëshironi të porosisni?"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.order}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="order-button"
            >
              Porosit Ushqimin
            </Button>
          </form>
        </Paper>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Porosia u dergua me sukses</DialogTitle>
          <DialogContent>
            <Typography variant="body1" style={{ color: "orange" }}>Porosia juaj u dërgua me sukses!</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary" autoFocus>
              Mbylle
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default Order;
