import { dotSpinner } from "ldrs";

const Loader = () => {
  dotSpinner.register();

  return (
    <div>
      <l-dot-spinner size="20" speed="0.9" color="white"></l-dot-spinner>
    </div>
  );
};

export default Loader;
