import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { getAllProducts } from '../../redux/actions/actionsProduct';

const Filter = () => {
    const dispatch = useDispatch()
    const [category, setCategory] = React.useState('');
    const [searchedName, setsearchedName] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        dispatch(getAllProducts(event.target.value,searchedName))
    };

    const handleName = (e) => {
        setsearchedName(e.target.value)
        dispatch(getAllProducts(category,e.target.value))

    }

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <TextField id="standard-basic" onChange={handleName} label="Search by name" variant="standard" />
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="tablette">Tab</MenuItem>
                        <MenuItem value="telephone">Tel</MenuItem>
                        <MenuItem value="others">Others</MenuItem>

                    </Select>
                </FormControl>
            </Box>
        </div>
    )
}

export default Filter