
import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { auth_user } from '../../../api/api';
import Container from '../../../components/Container/Container';
import * as Forms from "../../../components/form"
import { formsValidate } from '../../../helpers/Helpers';
import useLocation from '../../../hooks/useLocation';
import cls from "./Login.module.scss"

const Login = () => {
  const { actions } = useLocation();
  const notifySignIn = () => toast("You are Sign in!");

  const {
    register,
    handleSubmit,
    formState: {errors}
  } = useForm(({
    mode: "onBlur"
  }))

  const handleLogin = (data) => {
    const request = auth_user(data);

    request 
      .then(res => {
        const data = res.data;
        if(res) {
          localStorage.setItem("accessToken" , data.access );
          localStorage.setItem("refreshToken", data.refresh);
          actions.goToMain();
          notifySignIn();
        }
      })
  }
      
  return (
    <Container>
      <div className={cls.login_point}>
        <h2>Authorize your account and continue your travelling!</h2>

        <form onSubmit={handleSubmit(handleLogin)}>
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
              type="password"
              placeholder="Password"
              {...register("password" , formsValidate("Password"))}
            />
            {errors.password && <Forms.ErrorsInput err={errors.password?.message}/>}
          </Forms.Divider>

          <Forms.Divider>
            <Forms.AuthSubmit 
              location={"Login"}
            />
          </Forms.Divider>

          <Forms.Divider>
            <Forms.AuthNavigate 
              location={"login"}
            />
          </Forms.Divider>
        </form>
      </div>
    </Container>
  )
}

export default Login;
