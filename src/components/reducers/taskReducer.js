import { toast } from "react-toastify";

export const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ABOUT":
      toast.success("Added the About Section success!");
      return state;
    case "ADD_ABOUT_ERR":
      toast.error("Error while adding About!");
      console.log(action.payload);
      return state;
    case "UPDATE_ABOUT":
      toast.success("Updated About Section success!");
      return state;
    case "UPDATE_ABOUT_ERR":
      toast.error("Error while Updating About!");
      return state;
    case "ADD_EDU":
      toast.success("Added the EDU Section success!");
      return state;
    case "ADD_EDU_ERR":
      toast.error("Error while adding EDU!");
      return state;
    default:
      return state;
  }
};
