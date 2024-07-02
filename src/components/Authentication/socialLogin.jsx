"use client";
import { Button } from "../ui/button";
import { doSocialLogin } from "../../app/actions/index";
import Image from "next/image";
const AutheticationComponent = () => {
  return (
    <div>
      <form className="flex p-10 justify-center" action={doSocialLogin}>
        <Button
          className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          type="submit"
          name="action"
          value="google"
        >
          <Image
          src={"/assets/google.jpg"}
          width={30}
          height={30}
          
          />
          Sign in with Google
        </Button>
      </form>
    </div>
  );
};

export default AutheticationComponent;
