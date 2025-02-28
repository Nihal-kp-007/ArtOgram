import { ToastBar } from "react-hot-toast";


const Message = ({ variant= "info", children }) => {
  return <ToastBar variant={variant}>{children}</ToastBar>;
};
// Message.defaultProps = {
//   varient: "info",
// };

export default Message;
