import { TEST_DISPATCH } from "./types";
import axios from "axios";

//Register User
export const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => console.log(res.data))
    .catch(err => this.setState({ errors: err.response.data }));
};
