import { useState, useEffect } from 'react';
// import axios from 'axios'
// import { useHistory } from "react-router-dom";

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // let history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        // callback();

        // const baseURL = "https://courier-fullstack-api.herokuapp.com/api/v1/users/signup"
       
        //   axios.post(baseURL,JSON.stringify({
        //     username:values.username,
        //     email:values.email,
        //     password:values.password
        //   }))
        
        //   .then((res)=>{
        //     console.log(res);
        //     console.log("Successfully signed up...")
        //     history.push("/OrderPage")
        //     window.location.reload()
            
        //   })
        //   .catch((err)=>{
        //     console.log(err)
        // })
        let URL = 'https://courier-backend-fullstack.herokuapp.com/api/v1/users/signup';

      fetch(URL,{
          method: 'POST',
          body: JSON.stringify({"username":"Maria", "email":"maria@gmail.com","password":"1234test"})
      })

          .then((res)=>{
              return res.json();
          })
          .then((data)=>{
              console.log(data);
          })
          .catch((err)=>{
              console.log(err);
          })
              
      }
    },
    // [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
