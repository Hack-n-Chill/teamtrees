import { toast } from "react-toastify";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "SIGN_IN":
      toast.success("Welcome back to Portfoliofy! :)");
      return state;
    case "SIGN_IN_ERR":
      toast.error("Error Signing In :(");
      return state;
    case "SIGN_OUT":
      toast("Signed Out ");
      return state;
    case "SIGN_OUT_ERR":
      toast.error("Error !");
      return state
    case "SIGN_UP":
      toast("Welcome to Portofoliofy !");
      return state;
    case "SIGN_UP_ERR":
      toast.error("Error !");
      return state
    default:
      return state;
  }
};
