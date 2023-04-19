import axios from "axios";

const Login = () => {
  async function login() {
    const { data } = await axios.post("/api/login", {
      id: "t1",
      password: "t1",
    });

    localStorage.setItem("access_token", data.token);
  }

  return <button onClick={login}>로그인</button>;
};

export default Login;
