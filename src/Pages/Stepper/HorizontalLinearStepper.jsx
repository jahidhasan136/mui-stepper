import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Skills from '../Steps/Skills/Skills';
import { Container } from '@mui/material';

const customStepLabelStyles = {
  '& .MuiStepLabel-active': {
    color: 'green',
  },
};

// const customStepConnectorStyles = {
//   display: 'none',
// };

const customStepperStyles = {
  '& .MuiStepConnector-line': {
    // border: '2px solid #14a800', // Modify line styles
    borderRadius: '100%',
    marginTop: '6px'
  },
  '& .MuiStepIcon-root': {
    color: '#EAEFF3',
    border: '2px solid #E1E5E9',
    borderRadius: '100%',
    width: '41px',
    height: '41px',
},
  '& .MuiStepIcon-root.Mui-active': {
    border: '2px solid #14a800',
    color: 'white',
  },
  '& .MuiStepIcon-root.Mui-completed': {
    border: '0px solid #14a800',
    color: '#14a800',
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: '#14a800',
  },
  '& .MuiStepIcon-text': {
    fill: '#000'
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: '#14a800',
  },
};

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const steps = ['Skills', 'Education', 'Address', 'Digital Presence'];

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Skills />;
      case 1:
        return <Skills />;
      case 2:
        return <Skills />;
      case 3:
        return <Skills />;
      default:
        return 'Step not found';
    }
  };

  return (
    <Container className='stepper-margin'>
      <Box sx={{ width: '100%' }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={customStepperStyles}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (activeStep === index) {
              labelProps.style = customStepLabelStyles;
            }

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <Box sx={{ mt: 2 }}>{getStepContent(activeStep)}</Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button variant="contained" onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
