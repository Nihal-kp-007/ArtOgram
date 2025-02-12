import { dotSpinner } from "ldrs";

const Loader = () => {
  dotSpinner.register();

  return <div className="flex justify-center items-center h-[100vh]">
    <l-dot-spinner size="80" speed="0.9" color="white"></l-dot-spinner>
  </div>
};

export default Loader;
 