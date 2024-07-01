import { auth } from "../../auth";
import { redirect } from "next/navigation";
import Image from "next/image";

const User = async () => {
  const session = await auth();

  const { name, image } = session.user;

  return <div>{name}</div>;
};

export default User;
