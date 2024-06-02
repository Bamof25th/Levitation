import { ChangeEvent, FormEventHandler, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFaliure,
  signInStart,
  signInSuccess,
} from "../redux/reducer/userSlice";
import { User } from "../types/types";

export interface userSliceInitialState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

const Login = () => {
  // *useNavigate
  const navigate = useNavigate();

  //  *useStates
  const [formData, setFormData] = useState({});
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [loading, setLoading] = useState(false);

  //* useDispatch (redux)
  const dispatch = useDispatch();

  //* useSelector (redux)
  const { loading, error: errorMessage } = useSelector(
    (state: { user: userSliceInitialState }) => state.user
  );

  // *Functions
  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handelSubmit = async (
    e: FormEventHandler<HTMLFormElement> | undefined
  ) => {
    e.preventDefault();
    if (!formData) {
      return dispatch(signInFaliure("Please fill all fields are required"));
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/v1/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFaliure(data.message));
      }
      dispatch(signInSuccess(data));
      if (res.ok) {
        navigate("/");
      }
    } catch (error) {
      return dispatch(signInFaliure(error.message));
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-[27vw] mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handelSubmit}>
            <div className="">
              <Label value="Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handelChange}
              />
            </div>
            <div className="">
              <Label value="Your Password" />
              <TextInput
                type="password"
                placeholder="Password"
                id="password"
                onChange={handelChange}
              />
            </div>
            <Button
              gradientDuoTone="redToYellow"
              type="submit"
              //   disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign Up"
              )}
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account ?</span>
            <Link to="/signup" className="text-blue-500  hover:underline">
              Sign Up
            </Link>
            <div className="">
              {errorMessage && (
                <Alert className="mt-5" color="failure">
                  {errorMessage}
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
