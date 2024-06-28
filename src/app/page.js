import { redirect } from "next/navigation";
import Login from '../components/Authentication/login'
export default function Home() {
  redirect('/authentication')
  return (
   <></>
  );
}
