import { FieldErrors, useForm } from "react-hook-form";

// register에 name / onBlur / onChange / ref가 다 들어있다.
// watch는 onChange를 감지해준다.
// useForm에는 option으로 defaultValue를 지정해줄 수 있다.

interface LoginForm {
  username: string;
  password: string;
  email: string;
  error: string;
}

export default function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<LoginForm>({ mode: "onBlur" });

  // setError로 submit이 제대로 된 후 server에서 발생한 errore또한 message로 보여줄 수 있다.
  const onValid = (data: LoginForm) => {
    console.log(data);
    setError("username", { message: "This username is exist" });
    reset();
  };
  const onInvalid = (validErrors: FieldErrors) => {
    console.log(validErrors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col">
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "Username is more than 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      {errors.username?.message}
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Passowrd is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
    </form>
  );
}
