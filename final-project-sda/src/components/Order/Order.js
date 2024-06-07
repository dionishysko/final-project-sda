import React, { useState } from "react";
import { TextField, Button, Typography, Container, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import "./Order.css";


const Order = () => {
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
    if (firstName && lastName && phoneNumber && city && neighborhood && order) {
      setOpenDialog(true);
    } else {
      alert("Plotesimi i te gjitha textfieldeve eshte i detyruar");
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    resetForm();
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
    
    <Container maxWidth="sm" className="order-container">
      <Paper elevation={3} className="order-paper">
        <Typography variant="h4" align="center" gutterBottom>
          Porosia e Ushqimit
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="firstName"
            label="Emer"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            name="lastName"
            label="Mbiemer"
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
            label="Çfare deshironi te porosisni?"
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
        <DialogTitle>Porosia u krye me sukses</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Porosia juaj u dergua me sukses!</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Mbylle
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  
  );
};
export default Order;