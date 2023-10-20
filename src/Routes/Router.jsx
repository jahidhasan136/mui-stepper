import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Skills from "../Pages/Steps/Skills/Skills";
import Education from "../Pages/Steps/Education/Education";
import HorizontalLinearStepper from "../Pages/Stepper/HorizontalLinearStepper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: 'stepper',
        element: <HorizontalLinearStepper />
      },
      {
        path: 'skills',
        element: <Skills></Skills>
      }
      ,
      {
        path: "education",
        element: <Education></Education>
      }
    ],
  },
]);
