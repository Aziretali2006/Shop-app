
import React from 'react'
import { useForm } from 'react-hook-form';
import { createUser } from '../../../api/api';
import Container from '../../../components/Container/Container';
import * as Forms from "../../../components/form"
import { formsValidate } from '../../../helpers/Helpers';
import useLocation from '../../../hooks/useLocation';
import cls from "./Register.module.scss"

function Register() {
  const { actions } = useLocation();

  const {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm(({
    mode: "onBlur"
  }))

  const handleRegister = (data) => {
    const file = data.avatarka[0];

    const formData = new FormData();

    formData.append("avatarka" , file)

    const newBase = [];

    Object.entries(data).forEach(item => {
      if(!item[0].includes("avatarka")) {
        newBase.push(item)
      }
    })

    const personInfo = newBase.reduce((total , item) => {
      return {
        ...total,
        [item[0]]: item[1]
      }
    }, {})

    
    const newData = {
      ...personInfo,
      formData
    }

    if(!!newData) {
      const request = createUser(newData);

      request
        .then(res => {
          actions.goToLogin();
        })
    }
  }

  return (
    <Container>
      <div className={cls.register_point}>
        <h2>Create your own account, for buy your favorite clothes!</h2>

        <form onSubmit={handleSubmit(handleRegister)}>
          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder="Username"
              {...register("username" , formsValidate("Username"))}
            />
            {errors.username && <Forms.ErrorsInput err={errors.username?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder="About"
              {...register("about" , formsValidate("About"))}
            />
            {errors.about && <Forms.ErrorsInput err={errors.about?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="email"
              placeholder="Email"
              {...register("email" , formsValidate("Email"))}
            />
            {errors.email && <Forms.ErrorsInput err={errors.email?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="file"
              placeholder="Avatar"
              {...register("avatarka" , formsValidate("Avatar"))}
            />
            {errors.avatarka && <Forms.ErrorsInput err={errors.avatarka?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="text"
              placeholder="Phone Number"
              {...register("phone_number" , formsValidate("Phone Number"))}
            />
            {errors.phone_number && <Forms.ErrorsInput err={errors.phone_number?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="date"
              placeholder="Date"
              {...register("birth_date", formsValidate("Date"))}
            />
            {errors.birth_date && <Forms.ErrorsInput err={errors.birth_date?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.TextInput 
              type="password"
              placeholder="Password"
              {...register("password" , formsValidate("Password"))}
            />
            {errors.password && <Forms.ErrorsInput err={errors.password?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.AuthSubmit 
              location={"Register"}
            />
          </Forms.Divider>

          <Forms.AuthNavigate
            location={"register"}
          />
        </form>
      </div>
    </Container>
  )
}

export default Register;
