import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react"
import {useMutation} from '@apollo/client'
import { LOGIN } from "../../graphql/user";


export function Login () {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [user, setUser] = useState({
   loginData: "", password: ""
  });

  const [login, { data, loading, error }] = useMutation(LOGIN, {
    onCompleted: () => {
      alert(data.login);
      setUser({ loginData: "", password: "" });
    },
  });

  if (loading) return <p>Loading...</p>
  if (error) return `Submission error! ${error.message}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      variables: {
        loginData: user.loginData,
        password: user.password
      }
    });
  };

  return (
    <Box m="20px">
      <Header title="Login" subtitle="Please introduce your credentials" />

      <Formik
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Name"
                onChange={handleChange}
                name="loginData"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onChange={handleChange}
                name="password"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
            
            
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Connecting..." : "Login"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};