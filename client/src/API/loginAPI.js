import { BASE_URL } from "../Base_URL";
import usersAPI from "./usersAPI";
import { POST } from "../utils/http";
async function loginAPI({
  info,
  setIsLoading,
  setServerError,
  setIsLogin,
  setToken,
  setIsAdmin,
  history,
  setCurrentUser,
  setAllUsers,
  setIsFormLoading,
  setIsModerator,
}) {
  try {
    setIsFormLoading(true);

    const { json } = await POST(`${BASE_URL}/api/auth/login`, info);
    console.log('info',info)

    setIsFormLoading(false);

    if (json.user) {
      setServerError("");

      setIsLoading(true);
      const { token, roles, user } = json;

      await setToken(token);

      setCurrentUser(user);

      setIsLogin();

      if (user.name === "admin") {
        setIsAdmin(true);

        await usersAPI({ setAllUsers, token });

        setIsLoading(false);

        return navigate("/dashboard/orders");
      }
      if (user.name === "moderator") {
        setIsModerator(true);
        setIsLoading(false);
        return navigate("/dashboard/myProducts");
      }

      setIsLoading(false);
      return navigate("/menu");
    }

    setServerError(json.message);
  } catch (err) {
    console.log(err);

    setIsLoading(false);
    setServerError(
      "A ocurrido un error en el servidor, por favor intente de nuevo"
    );
  }
}
export default loginAPI;
