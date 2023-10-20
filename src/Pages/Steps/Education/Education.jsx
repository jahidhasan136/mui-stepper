/* eslint-disable no-unused-vars */
import React from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const Education = () => {
    return (
        <div className="skill-mx-auto">
            <div className="skill-container">
                <h2 className="skill-title">Education Qualification</h2>

                <form className="form-skill" action="">

                    <div className='form-group'>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined-basic'
                            label='University'
                            variant='outlined'
                            placeholder='|e.g. Stanford University'

                        />
                        <p className='character'>Max. 100 Character</p>
                    </div>

                    <div className="form-group ">
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label ' >
                                Passing Year
                            </InputLabel>
                            <Select
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#14A800"
                                        }

                                    }
                                }}
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                label="Passing Year"

                            >
                                <MenuItem value={10}>Agency</MenuItem>
                                <MenuItem value={20}>Individual</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div className='form-group'>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined-basic'
                            label='Degree'
                            variant='outlined'
                            placeholder='B.A.'

                        />

                    </div>
                    <div className='form-group'>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined-basic'
                            label='College'
                            variant='outlined'
                            placeholder='Govt. College'

                        />
                        <div className='text-right'>
                            <Button
                                sx={{
                                    color: "#14A800",
                                    fontSize: "16px",
                                    marginTop: "8px",
                                }
                                }
                                variant="text">Add More</Button>
                        </div>
                    </div>
                    <div className='form-group'>
                        <TextField fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"

                                    }
                                }
                            }}

                            id='outlined-basic'
                            label='Certifications'
                            variant='outlined'
                            placeholder='Name of certificate'

                        />

                    </div>
                    <div className='form-group'>
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label ' >
                                Completion Year
                            </InputLabel>
                            <Select
                                sx={{
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            borderColor: "#14A800"
                                        }

                                    }
                                }}
                                labelId='demo-simple-select-label'
                                id='demo-simple-select'
                                label="Completion Year"


                            >
                                <MenuItem value={10}>Add year of completion</MenuItem>
                                <MenuItem value={20}>Individual</MenuItem>
                            </Select>
                        </FormControl>
                        <div className='text-right'>
                            <Button
                                sx={{
                                    color: "#14A800",
                                    fontSize: "16px",
                                    marginTop: "8px",
                                }
                                }
                                variant="text">Add More</Button>
                        </div>
                    </div>

                </form>
            </div >
        </div >
    );
};

export default Education;