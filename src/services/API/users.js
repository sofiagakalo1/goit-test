import axios from "axios";

const contactsInstance = axios.create({
  baseURL: "https://6400e1123779a862624eada3.mockapi.io/api/users",
});
export const getAllUsers = async (page, pageSize) => {
  const response = await contactsInstance.get("/", {
    params: {
      page,
      limit: pageSize,
    },
  });
  // console.log(response);
  return response.data;
};
