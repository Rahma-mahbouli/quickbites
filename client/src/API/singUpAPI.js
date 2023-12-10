import { BASE_URL } from "../Base_URL";
import { POST } from "../utils/http";

async function singUpAPI({
  setIsFormLoading,
  setServerError,
  navigate,
  info,
}) {
 
  try {
    const { response, json } = await POST(`${BASE_URL}/api/auth/signup`, info);

    setIsFormLoading(false);

    if (json.email) {
      setServerError("");

      const { email } = json;

      localStorage.setItem("toConfirmUser", email);

      setTimeout(() => {
        return navigate("/#/authentication/confirmation");
      }, 1000);
    }

    if (response.status === 400) {
      setServerError(json.message);
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

export default singUpAPI;
