/* eslint-disable no-unused-vars */
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

const Skills = () => {
    return (
        <div className="skill-mx-auto">
            <div className="skill-container">
                <h2 className="skill-title">Skills and Experience</h2>

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

                            id='outlined'
                            label='Introduce Yourself'
                            variant='outlined'
                            placeholder='Text Here'
                            className='introduce'
                        />
                        <p className='character'>Max. 100 Character</p>
                    </div>
                    <div className="form-group">
                        <div className="form-header">
                            <h2 className="form-title">Primary Skill <span>*</span></h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.8175 7.25043C6.99383 6.74918 7.34187 6.32651 7.79997 6.05728C8.25807 5.78805 8.79668 5.68963 9.32039 5.77946C9.8441 5.86929 10.3191 6.14157 10.6613 6.54807C11.0035 6.95458 11.1908 7.46907 11.19 8.00043C11.19 9.50043 8.94 10.2504 8.94 10.2504" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 13.25H9.0075" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <Grid container
                        >
                            <Grid lg={4} >
                                <FormControl fullWidth >
                                    <InputLabel id='demo-simple-select-label' className='technology' >
                                        Technology
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
                                        label='Technology'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={4} >
                                <FormControl fullWidth >
                                    <InputLabel id='demo-simple-select-label '>
                                        Years of Exp.
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
                                        label='Years of Exp.'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={4}>
                                <FormControl fullWidth>
                                    <InputLabel id='demo-simple-select-label '>
                                        Expertise Level
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
                                        label='Expertise Level'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </div>
                    <div className="form-group">
                        <div className="form-header">
                            <h2 className="form-title">Secondary Skill <span>*</span></h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.8175 7.25043C6.99383 6.74918 7.34187 6.32651 7.79997 6.05728C8.25807 5.78805 8.79668 5.68963 9.32039 5.77946C9.8441 5.86929 10.3191 6.14157 10.6613 6.54807C11.0035 6.95458 11.1908 7.46907 11.19 8.00043C11.19 9.50043 8.94 10.2504 8.94 10.2504" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 13.25H9.0075" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <Grid container
                        >
                            <Grid lg={4} >
                                <FormControl fullWidth >
                                    <InputLabel id='demo-simple-select-label' className='technology' >
                                        Technology
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
                                        label='Technology'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={4} >
                                <FormControl fullWidth >
                                    <InputLabel id='demo-simple-select-label '>
                                        Years of Exp.
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
                                        label='Years of Exp.'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={4}>
                                <FormControl fullWidth>
                                    <InputLabel id='demo-simple-select-label '>
                                        Expertise Level
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
                                        label='Expertise Level'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </div>
                    <div className="form-group">
                        <div className="form-header">
                            <h2 className="form-title">Other Technical Skills <span>*</span></h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17Z" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.8175 7.25043C6.99383 6.74918 7.34187 6.32651 7.79997 6.05728C8.25807 5.78805 8.79668 5.68963 9.32039 5.77946C9.8441 5.86929 10.3191 6.14157 10.6613 6.54807C11.0035 6.95458 11.1908 7.46907 11.19 8.00043C11.19 9.50043 8.94 10.2504 8.94 10.2504" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 13.25H9.0075" stroke="#14A800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <Grid container
                        >
                            <Grid lg={4} >
                                <FormControl fullWidth >
                                    <InputLabel id='demo-simple-select-label' className='technology' >
                                        Technology
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
                                        label='Technology'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={4} >
                                <FormControl fullWidth >
                                    <InputLabel id='demo-simple-select-label '>
                                        Years of Exp.
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
                                        label='Years of Exp.'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid lg={4}>
                                <FormControl fullWidth>
                                    <InputLabel id='demo-simple-select-label '>
                                        Expertise Level
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
                                        label='Expertise Level'
                                        className='skill-width'

                                    >
                                        <MenuItem value={10}>Agency</MenuItem>
                                        <MenuItem value={20}>Individual</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                        </Grid>
                    </div>
                    <div className="form-group ">
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label ' className='type'>
                                Total Years of Experience*
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
                                label={<><span>Total Years of Experience</span><span className='red-color'>*</span></>}

                            >
                                <MenuItem value={10}>Agency</MenuItem>
                                <MenuItem value={20}>Individual</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group ">
                        <FormControl fullWidth>
                            <InputLabel id='demo-simple-select-label ' className='type'>
                                How would you like to identify*
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
                                label={<><span>How would you like to identify</span><span className='red-color'>*</span></>}

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

                            id='outlined'
                            label='Brief about your Work Experience*'
                            variant='outlined'
                            placeholder='Text Here'
                            className='introduce'
                        />
                        <p className='character'>Max. 100 Character</p>
                    </div>
                    <div className='form-group password'>
                        <TextField
                            fullWidth
                            sx={{
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        borderColor: "#14A800"
                                    }
                                }
                            }}
                            id='outlined-basic'
                            label='Upload Profile Picture*'
                            variant='outlined'
                            placeholder='No File Chosen'
                        />
                        <div className='upload'>
                            <Button variant='outlined' component='label'>
                                Choose File
                                <input type='file' hidden />
                            </Button>
                        </div>
                    </div>
                </form>
            </div >
        </div >

    );
};

export default Skills;