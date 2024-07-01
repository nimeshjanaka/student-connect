"use client";
import { Button } from "../ui/button";
import { doSocialLogin } from "../../app/actions/index";
const AutheticationComponent = () => {
  return (
    <div>
      <form className="flex p-10 justify-center" action={doSocialLogin} >

        <Button type="submit" name="action" value="google">
          Sign in with Google
        </Button>

      </form>
    </div>
  );
};

export default AutheticationComponent;