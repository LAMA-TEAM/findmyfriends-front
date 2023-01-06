import { getMe } from "./api"

export const protectedRoute = async () => {
    console.log("protectedRoute");
    await getMe();
}
