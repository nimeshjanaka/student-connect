import Login from "../../../components/Authentication/login";
import AutheticationComponent from '../../../components/Authentication/socialLogin'
const Authentication = () => {
  return (
    <div>
      {/* <SignUp/> */}
      <Login />
      <AutheticationComponent/>
    </div>
  );
};

export default Authentication;
