/* eslint-disable no-unused-vars */
import {
  Button,
  Checkbox,
  FilledInput,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
// import eye from "../../assets/Images/eye.svg";
import eyepng from "../../assets/Images/eye.png";
import React, { useState } from "react";
import signup from "../../assets/Images/signup-bg.png";
import logo from "../../assets/Images/logo.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [visible, setVisible] = useState(1);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePass = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className='signup'>
      <Grid container>
        <Grid sm={12} md={6} className='signup-left'>
          <img src={logo} alt='' />
          <h2 className='signup-title'>Welcome to HireCoder</h2>
          <p className='signup-sub-title'>Sign up as</p>
          <form className='signup-form' action=''>
            <div className='form-group radio'>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                  defaultValue='coder'
                >
                  <FormControlLabel
                    value='Client'
                    control={<Radio />}
                    label='Client'
                    onClick={() => {
                      setVisible(2);
                    }}
                  />
                  <FormControlLabel
                    value='coder'
                    control={<Radio />}
                    label='Coder'
                    onClick={() => {
                      setVisible(1);
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {visible === 1 && (
              <>
                <div className='form-group gap'>
                  <Grid container rowGap={2}>
                    <Grid lg={6} className='fullwidth'>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: "#14A800",
                            },
                          },
                        }}
                        id='outlined-basic'
                        label='Name'
                        variant='outlined'
                        placeholder='Name'
                        className='first-name'
                      />
                    </Grid>
                    <Grid sm={12} lg={6} className='fullwidth'>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: "#14A800",
                            },
                          },
                        }}
                        id='outlined-basic'
                        label='Last Name'
                        variant='outlined'
                        placeholder='Last Name'
                        className='last-name'
                      />
                    </Grid>
                  </Grid>
                </div>
                <div className='form-group'>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label='Email'
                    variant='outlined'
                    placeholder='Email'
                  />
                </div>
                <div className='form-group  password '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    type={isPasswordVisible ? "text" : "password"}
                    id='outlined-basic'
                    label='Password'
                    variant='outlined'
                    placeholder='Password'
                  />
                  <div onClick={togglePass}>
                    {isPasswordVisible ? (
                      <>
                        {" "}
                        <img className='eye' src={eyepng} alt='' />
                      </>
                    ) : (
                      <>
                        {" "}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22'
                          height='22'
                          viewBox='0 0 22 22'
                          fill='none'
                        >
                          <g clipPath='url(#clip0_611_66)'>
                            <path
                              d='M9.07496 3.88702C9.70593 3.73932 10.3519 3.66549 11 3.66702C17.4166 3.66702 21.0833 11.0003 21.0833 11.0003C20.5269 12.0413 19.8633 13.0214 19.1033 13.9245M12.9433 12.9437C12.6915 13.2139 12.3879 13.4306 12.0506 13.5809C11.7133 13.7312 11.3491 13.812 10.9799 13.8185C10.6106 13.825 10.2439 13.7571 9.90144 13.6188C9.55901 13.4805 9.24795 13.2746 8.98682 13.0135C8.72568 12.7524 8.51982 12.4413 8.38151 12.0989C8.2432 11.7564 8.17528 11.3897 8.18179 11.0204C8.18831 10.6512 8.26913 10.287 8.41943 9.94971C8.56973 9.61238 8.78644 9.30878 9.05663 9.05702M16.445 16.4453C14.878 17.6398 12.97 18.3015 11 18.3337C4.58329 18.3337 0.916626 11.0003 0.916626 11.0003C2.05686 8.87542 3.63833 7.01891 5.55496 5.55535L16.445 16.4453Z'
                              stroke='black'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M0.916626 0.916992L21.0833 21.0837'
                              stroke='black'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_611_66'>
                              <rect width='22' height='22' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </>
                    )}
                  </div>
                </div>
                <div className='form-group gap'>
                  <Grid container rowGap={2}>
                    <Grid sm={12} lg={6} className='fullwidth'>
                      <TextField
                        fullWidth
                        sx={{
                          "& .MuiOutlinedInput-root.Mui-focused": {
                            "& > fieldset": {
                              borderColor: "#14A800",
                            },
                          },
                        }}
                        id='outlined-basic'
                        label='Phone'
                        variant='outlined'
                        placeholder='Phone'
                        className='first-name'
                      />
                    </Grid>
                    <Grid sm={12} lg={6} className='fullwidth'>
                      <FormControl fullWidth>
                        <InputLabel
                          id='demo-simple-select-label '
                          className='type'
                        >
                          Type
                        </InputLabel>
                        <Select
                          sx={{
                            "& .MuiOutlinedInput-root.Mui-focused": {
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#14A800",
                              },
                            },
                          }}
                          labelId='demo-simple-select-label'
                          id='demo-simple-select'
                          label='Type'
                          className='last-name'
                        >
                          <MenuItem value={10}>Agency</MenuItem>
                          <MenuItem value={20}>Individual</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </div>
              </>
            )}
            {visible === 2 && (
              <>
                <div className='form-group '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label='Name'
                    variant='outlined'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label={
                      <>
                        <span>Company Email</span>
                        <span className='red-color'>*</span>
                      </>
                    }
                    variant='outlined'
                    placeholder='Company Email'
                  />
                </div>
                <div className='form-group  password '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    type={isPasswordVisible ? "text" : "password"}
                    id='outlined-basic'
                    label='Password'
                    variant='outlined'
                    placeholder='Password'
                  />
                  <div onClick={togglePass}>
                    {isPasswordVisible ? (
                      <>
                        {" "}
                        <img className='eye' src={eyepng} alt='' />
                      </>
                    ) : (
                      <>
                        {" "}
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='22'
                          height='22'
                          viewBox='0 0 22 22'
                          fill='none'
                        >
                          <g clipPath='url(#clip0_611_66)'>
                            <path
                              d='M9.07496 3.88702C9.70593 3.73932 10.3519 3.66549 11 3.66702C17.4166 3.66702 21.0833 11.0003 21.0833 11.0003C20.5269 12.0413 19.8633 13.0214 19.1033 13.9245M12.9433 12.9437C12.6915 13.2139 12.3879 13.4306 12.0506 13.5809C11.7133 13.7312 11.3491 13.812 10.9799 13.8185C10.6106 13.825 10.2439 13.7571 9.90144 13.6188C9.55901 13.4805 9.24795 13.2746 8.98682 13.0135C8.72568 12.7524 8.51982 12.4413 8.38151 12.0989C8.2432 11.7564 8.17528 11.3897 8.18179 11.0204C8.18831 10.6512 8.26913 10.287 8.41943 9.94971C8.56973 9.61238 8.78644 9.30878 9.05663 9.05702M16.445 16.4453C14.878 17.6398 12.97 18.3015 11 18.3337C4.58329 18.3337 0.916626 11.0003 0.916626 11.0003C2.05686 8.87542 3.63833 7.01891 5.55496 5.55535L16.445 16.4453Z'
                              stroke='black'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M0.916626 0.916992L21.0833 21.0837'
                              stroke='black'
                              strokeWidth='1.5'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_611_66'>
                              <rect width='22' height='22' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>
                      </>
                    )}
                  </div>
                </div>
                <div className='form-group '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label={
                      <>
                        <span>Phone</span>
                        <span className='red-color'>*</span>
                      </>
                    }
                    variant='outlined'
                    placeholder='Phone'
                  />
                </div>
                <div className='form-group '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label={
                      <>
                        <span>Company Name</span>
                        <span className='red-color'>*</span>
                      </>
                    }
                    variant='outlined'
                    placeholder='Company Name'
                  />
                </div>
                <div className='form-group '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label={
                      <>
                        <span>Company Website</span>
                        <span className='red-color'>*</span>
                      </>
                    }
                    variant='outlined'
                    placeholder='Company Website'
                  />
                </div>
                <div className='form-group '>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label={
                      <>
                        <span>LinkedIn URL</span>
                        <span className='red-color'>*</span>
                      </>
                    }
                    variant='outlined'
                    placeholder='LinkedIn URL'
                  />
                </div>
                <div className='form-group password'>
                  <TextField
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#14A800",
                        },
                      },
                    }}
                    id='outlined-basic'
                    label='Logo'
                    variant='outlined'
                    placeholder='No File Chosen'
                  />
                  <div className='upload'>
                    <Button
                      sx={{
                        color: "#4D4D4D",
                        backgroundColor: "#DDD",
                        border: "1px solid #4D4D4D",

                        textTransform: "capitalize",
                        "&:hover": {
                          backgroundColor: "#14A840",

                          color: "white",
                        },
                      }}
                      variant='contained'
                      component='label'
                    >
                      Choose File
                      <input type='file' hidden />
                    </Button>
                  </div>
                </div>
              </>
            )}
            <div className='check'>
              <Checkbox />{" "}
              <p>
                By Signing up you agree to our{" "}
                <a href='#'>Terms and Condition</a> and{" "}
                <a href='#'>Privacy Policy</a>
              </p>
            </div>
            <Button
              sx={{
                backgroundColor: "#14A800",
                marginTop: "40px",
                padding: "14px 0",
                "&:hover": { backgroundColor: "#14A840" },
              }}
              className='primary-btn'
              fullWidth
              variant='contained'
            >
              Sign up
            </Button>
            <p className='account'>
              Already have an account ?{" "}
              <Link className='signup-login' to='/'>
                Log In
              </Link>
            </p>
          </form>
        </Grid>
        <Grid sm={12} md={6} className='signup-right'>
          <img
            className={
              visible == 2 ? "signup-img h-full" : "signup-img  h-screen"
            }
            src={signup}
            alt=''
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
