import React, {  useState } from "react";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/CustomButton.component";
import FormInput from "../form-input/FormInput.component";
import "./signIn.styles.scss";

export default function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="sign-in">
      <h2>I already Have an Account</h2>
      <span>signIn With your Email and Password</span>
      <form>
        <FormInput
          name="email"
          type="email"
          required={true}
          value={email}
          handleChange={(email:string) => setEmail(email)}
          label="Email"
        />
        
        <FormInput
          name="password"
          type="password"
          required={true}
          value={password}
          handleChange={(password:string) => setPassword(password)}
          label="Password"
        />
       <CustomButton type="submit">Sign In </CustomButton>
       <CustomButton onClick={signInWithGoogle}>Sign In With Google</CustomButton>
      </form>
    </div>
  );
}
