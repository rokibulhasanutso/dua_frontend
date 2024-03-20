import { redirect } from "next/navigation";

const page = () => {

  redirect("/duas");
  // The reason for the redirect is that I need a route called dua
  
  return;
};

export default page;