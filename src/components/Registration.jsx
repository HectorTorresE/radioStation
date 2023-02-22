import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEXP = /^[a-zA-Z0-9]{3,23}$/;
const PW_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Registration = () => {
  const userRef = useRef();
  const errRef = useRef();

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
    const result = EMAIL_REGEXP.test(username);
    //for tesing remove later
    console.log(result);
    console.log(username);
    //until here
    setValidName(result);
  }, [username]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setUser("");
      setPwd("");
      setMatchPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <section className="flex flex-col items-center bg-gray-500">
      <p
        ref={errRef}
        className={
          errMsg ? "bg-pink-200 text-red-500 font-bold p-2 mb-2" : "hidden"
        }
        aria-live="assertive"
      >
        {errMsg}
      </p>
      <h1 className="text-5xl my-5 font-bold underline">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-evenly grow pb-4">
        <label htmlFor="username">
          Email:
          {/* need to add icon to span for valid and invalid */}
          <FontAwesomeIcon
            icon={faCheck}
            className={validName ? "text-green-400 ml-1" : "hidden"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validName || !username ? "hidden" : "text-red-500 mx-1"}
          />
        </label>
        <input
          type="text"
          id="username"
          name="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required
          aria-invalid={validName ? "false" : "true"}
          aria-describedby="uidnote"
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
        />
        <p
          id="uidnote"
          className={
            userFocus && username && !validName
              ? "text-xs border-lg bg-black p-1 relative bottom-[-10px]"
              : "absolute -left-[-9999px]"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Username must be 3-23 characters. <br />
          Only letters and numbers are allowed.
        </p>

        <label htmlFor="password">
          Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validName ? "text-green-400 ml-1" : "hidden"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validName || !username ? "hidden" : "text-red-500 mx-1"}
          />
        </label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
          aria-invalid={validPw ? "false" : "true"}
          aria-describedby="pwnote"
          onFocus={() => setPwFocus(true)}
          onBlur={() => setPwFocus(false)}
        />
        <p
          id="pwnote"
          className={
            pwFocus && !validPw
              ? "text-xs border-lg bg-black p-1 relative bottom-[-10px]"
              : "absolute -left-[-9999px]"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Password must be 8-24 characters. <br />
          Must contain at least one uppercase letter, one lowercase letter, one
          number, and one special character.
        </p>

        <label htmlFor="confirm_pwd">
          Confirm Password:
          <FontAwesomeIcon
            icon={faCheck}
            className={validName ? "text-green-400 ml-1" : "hidden"}
          />
          <FontAwesomeIcon
            icon={faTimes}
            className={validName || !username ? "hidden" : "text-red-500 mx-1"}
          />
        </label>
        <input
          type="password"
          id="confirm_pwd"
          onChange={(e) => setPassword2(e.target.value)}
          value={password2}
          required
          aria-invalid={validPw2 ? "false" : "true"}
          aria-describedby="confirmnote"
          onFocus={() => setPw2Focus(true)}
          onBlur={() => setPw2Focus(false)}
        />
        <p
          id="confirmnote"
          className={
            pw2Focus && !validPw2
              ? "text-xs border-lg bg-black p-1 relative bottom-[-10px]"
              : "absolute -left-[-9999px]"
          }
        >
          <FontAwesomeIcon icon={faInfoCircle} />
          Must match the first password input field.
        </p>
        <button disabled={!validName || !validPw || !validPw2 ? true : false}>
          Sign Up
        </button>
      </form>
      <p>
        Already registered?
        <br />
        <span className="inline-block">
          {/*put router link here*/}
          <a href="#">Sign In</a>
        </span>
      </p>
    </section>
  );
};

export default Registration;
