import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logocopy.svg";
import google from "../assets/google.svg";
function Login() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);
  const googleLoginUrl = `https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${window.location.origin}/`;
  const hangelGoogleLogin = async () => {
    window.location.href = googleLoginUrl;
  };

  return (
    <div>
      <div
        className=" min-h-screen min-w-full bg-black flex flex-col items-center justify-between"
        onClick={() => {
          hangelGoogleLogin();
        }}
      >
        <header className=" w-full flex justify-center align-middle  border-b-2 border-[#25262B]  p-2 sm:p-4 md:p-6  ">
          <img src={logo} alt="Reachinbox Logo" width={160} height={25} />
        </header>

        <div className=" flex justify-center align-middle">
          <div className=" w-full  min-w-[90%] p-10 space-y-8 bg-gradient-to-br from-[#111214] to-[#121212] rounded-3xl border-2 border-[#25262B] flex flex-col items-center ">
            <h2 className=" sm:text-base md:text-xl lg:text-2xl text-center text-white font-light ">
              Create Link new account
            </h2>
            <Link href={googleLoginUrl}>
              <button className="w-full px-12 py-3 flex items-center justify-center space-x-2 text-gray-200 font-light border border-[#707172] rounded-md ">
                <img src={google} width={30} height={30} alt="Google Logo" />
                <span>Sign Up with Google</span>
              </button>
            </Link>
            <Link href={googleLoginUrl}>
              <button className="w-fit px-6 font-light py-3 text-white bg-gradient-to-r from-[#4B63DD] to-[#0524BF] rounded-md ">
                Create an Account
              </button>
            </Link>
            <p className="text-center text-gray-400 font-light">
              Already have an account?{" "}
              <Link
                href={googleLoginUrl}
                className="text-slate-200 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <footer className="w-full flex justify-center align-middle text-zinc-500 text-xs sm:text-sm mt-8 sm:mt-4 bg-[#121212] border-t-2 border-[#25262B] p-1 sm:p-2 md:p-3">
          © 2023 Reachinbox. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Login;
