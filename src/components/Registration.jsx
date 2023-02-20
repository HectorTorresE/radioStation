import { useState, useEffect, useRef } from "react";

const USER_REGEXP = /^[a-zA-Z0-9]{3,23}$/;
const PW_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Registration = () => {
  const useRef = useRef();
  const errRef = errRef();

  const [username, setUsername] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPw, setValidPw] = useState(false);
  const [pwFocus, setPwFocus] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPw2, setValidPw2] = useState(false);
  const [pw2Focus, setPw2Focus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEXP.test(username);
    //for tesing remove later
    console.log(result);
    console.log(username);
    //until here
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PW_REGEXP.test(password);
    //for tesing remove later
    console.log(result);
    console.log(password);
    //until here
    setValidPw(result);
    const match = password === password2;
    setValidPw2(match);
  }, [password, password2]);

  useEffect(() => {
    setErrMsg("");
  }, [username, password, password2]);
  s;
  return (
    <section>
      <p
        ref={errRef}
        className={errMsg ? "text-red-700 flex" : "hidden"}
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1>Register</h1>
      <form>
        <label htmlFor="username">
          Username:
          {/* need to add icon to span for valid and invalid */}
          <span className={validName ? "text-green-400" : "hidden"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span className={validName || !username ? "hidden" : "text-red-700"}>*</span>
        </label>
        <input
          type="text"
          id="username"
          name="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && username && !validName ? "text-sm text-gray-500" : "hidden"
          }
        >
          Username must be 3-23 characters. <br />
          Only letters and numbers are allowed.
        </p>

        <label htmlFor="password">
          Password:
          {/* need to add icon to span for valid and invalid */}
          <span className={validName ? "text-green-400" : "hidden"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </span>
          <span className={validName || password? "hidden" : "text-red-700"}>*</span>
        </label>
        <input
          type="password"
          id="password"
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-invalid={validPw ? "false" : "true"}
          aria-describedby="pwnote"
          onFocus={() => setPwFocus(true)}
          onBlur={() => setPwFocus(false)}
        />
        <p
          id="pwnote"
          className={
            userFocus && password && !validPw ? "text-sm text-gray-500" : "hidden"
          }
        >
          Password must be 8-24 characters. <br />
          Must contain at least one uppercase letter, one lowercase letter, one
          number, and one special character.
        </p>
      </form>
    </section>
  );
};

export default Registration;
