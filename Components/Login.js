import Button from "@material-tailwind/react/Button";
import { signIn } from "next-auth/react";
function Login() {
  return (
    <>
      <div className="flex flex-col text-4xl font-bold text-blue-400 w-2/3 mx-auto text-center justify-center h-screen">
        <div>Click on the Below Button For Login</div>
        <Button
          className="w-44 mt-50 flex justify-center"
          color="blue"
          buttonType="filled"
          ripple="light"
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </>
  );
}

export default Login;
