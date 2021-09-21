import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
          
          let URL = 'https://courier-backend-fullstack.herokuapp.com/api/v1/users/signup';

          let data = {
              username: values.username,
              email: values.email,
              password: values.password
          } 

          fetch(URL,{
              method:'POST',
              headers:{
                  'Content-Type': 'application/json'
              },
              body:JSON.stringify(data)
          })

          .then((res)=>{
              return res.json();
          })
          .then((data)=>{
              console.log(data);
              // Add the token received to local-storage
              localStorage.setItem('token',data.token)
              // redirects to orders page
              callback();
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
