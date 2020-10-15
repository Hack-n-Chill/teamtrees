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
    case "REMOVE_ABOUT":
      toast.warning("Deleted the About Section success!");
      return state;
    case "REMOVE_ABOUT_ERR":
      toast.error("Error while updating About!");
      return state;
    case "ADD_EDU":
      toast.success("Added the EDU Section success!");
      return state;
    case "ADD_EDU_ERR":
      toast.error("Error while adding EDU!");
      return state;
    case "UPDATE_EDU":
      toast.success("Updated the EDU Section success!");
      return state;
    case "UPDATE_EDU_ERR":
      toast.error("Error while updating EDU!");
      return state;
    case "REMOVE_EDU":
      toast.warning("Deleted the EDU Section success!");
      return state;
    case "REMOVE_EDU_ERR":
      toast.error("Error while updating EDU!");
      return state;
    case "ADD_EXP":
      toast.success("Added the EXP Section success!");
      return state;
    case "ADD_EXP_ERR":
      toast.error("Error while adding EXP!");
      console.log(action.payload);
      return state;
    case "UPDATE_EXP":
      toast.success("Updated EXP Section success!");
      return state;
    case "UPDATE_EXP_ERR":
      toast.error("Error while Updating EXP!");
      return state;
    case "REMOVE_EXP":
      toast.warning("Deleted the EXP Section success!");
      return state;
    case "REMOVE_EXP_ERR":
      toast.error("Error while updating EXP!");
      return state;
      case "ADD_PROJ":
        toast.success("Added the PROJ Section success!");
        return state;
      case "ADD_PROJ_ERR":
        toast.error("Error while adding PROJ!");
        console.log(action.payload);
        return state;
      case "UPDATE_PROJ":
        toast.success("Updated PROJ Section success!");
        return state;
      case "UPDATE_PROJ_ERR":
        toast.error("Error while Updating PROJ!");
        return state;
      case "REMOVE_PROJ":
        toast.warning("Deleted the PROJ Section success!");
        return state;
      case "REMOVE_PROJ_ERR":
        toast.error("Error while updating PROJ!");
        return state;
    default:
      return state;
  }
};
