import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react"
import {useMutation} from '@apollo/client'
import { CREATE_USER } from "../../graphql/user";


export function Form () {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    roleId: "",
  });

  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    onCompleted: () => {
      alert('User created successfully!');
      console.log(data);
      setUser({ name: '', phone: '',email: '',password: '', roleId: '' });
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
    createUser({
      variables: {
        name: user.name,
        phone: user.phone,
        email: user.email,
        firstPassword: user.password,
        roleId: user.role,
      }
    });
    //console.log(user);
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

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
                name="name"
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone number"
                onChange={handleChange}
                name="phone"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onChange={handleChange}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}  
                sx={{ gridColumn: "span 3" }}
              />
              <Box sx={{ gridColumn: "span 3" }}>
                <Select
                  fullWidth
                  variant="filled"
                  label="Role"
                  name="role"
                  onChange={handleChange}
                  value={user.role}
                  error={!!touched.role && !!errors.role}
                >
                  <MenuItem value="6423097f4353e82e066a773e">Trainer</MenuItem>
                  <MenuItem value="642309794353e82e066a773c">Candidate</MenuItem>
                </Select>
              </Box>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create New User"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};