import { useState } from 'react';
import { Box, Typography, Grid, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CloseButton from '../../Buttons/CloseButton';
import axios from 'axios';

const ArmyForm = ({ nodes, onClose }) => {
  const [name, setName] = useState('');
  const [general, setGeneral] = useState('');
  const [soldiers, setSoldiers] = useState('');
  const [node, setNode] = useState(1);

  const handleSubmit = (event) => {
    const soldiersArray = soldiers.split(',').map(function(soldier) {
      return soldier.trim();
    }).filter(function(soldier) {
      return soldier !== '';
    });

    axios.post('https://battle-legion-backend.onrender.com/api/armies', {
      name: name,
      general: general,
      soldiers: soldiersArray,
      node: node
    })
      .catch(e => console.log(e.message));
  }

  return (
    <Box
      className="box"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <CloseButton onClose={onClose} />
      <Typography component="h1" variant="h5">
        Add Army
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              required
              autoFocus
              value={name}
              name="name"
              label="Name"
              size="small"
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              value={general}
              name="general"
              label="General"
              size="small"
              onChange={(e) => setGeneral(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={soldiers}
              name="soldiers"
              label="Soldiers"
              size="small"
              multiline
              rows={5}
              helperText="Separate names with commas"
              onChange={(e) => setSoldiers(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl required sx={{ minWidth: 80, marginTop: 1 }}>
              <InputLabel>Node</InputLabel>
              <Select
                required
                name="node"
                value={node}
                label="Node"
                size="small"
                onChange={(e) => setNode(e.target.value)}
                MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
              >
                {nodes.map((node) => <MenuItem key={`select-${node.id}`} value={node.id}>{node.id}</MenuItem>)}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Save
        </Button>
      </Box>
    </Box>
  )
};

export default ArmyForm;