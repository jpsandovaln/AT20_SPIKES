import { Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useState } from "react"
import {useMutation} from '@apollo/client'
import { ADD_PERSONAL_INFO } from "../../graphql/user";

const userId = '851b4408-dc81-4107-884a-ed8954e80cda';
export function AddPersonalInfo () {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const [info, setInfo] = useState({
    globalID: "",
    firstName: "",
    lastName: "",
    country: "",
    city: "",
    age: "",
  });

  const [addInfo, { data, loading, error }] = useMutation(ADD_PERSONAL_INFO, {
    onCompleted: () => {
      alert("Info added successfully");
      console.log(data);
      setInfo({   
      globalID: "",
      firstName: "",
      lastName: "",
      country: "",
      city: "",
      age: "",});
    },
  });

  if (loading) return <p>Loading...</p>
  if (error) return `Submission error! ${error.message}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInfo({
      variables: {
        globalID: userId,
        firstName: info.firstName,
        lastName: info.lastName,
        country: info.city,
        city: info.city,
        age: info.age,
      }
    });
  };

  return (
    <Box m="20px">
      <Header title="Please add your info" subtitle="" />

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
                label="First Name"
                onChange={handleChange}
                name="firstName"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onChange={handleChange}
                name="lastName"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Country"
                onChange={handleChange}
                name="country"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="City"
                onChange={handleChange}
                name="city"
                error={!!touched.name && !!errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 3" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                onChange={handleChange}
                name="age"
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
                {isSubmitting ? "Connecting..." : "Submit data"}
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};