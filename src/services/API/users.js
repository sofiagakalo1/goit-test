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
export const getTotalHits = async () => {
  const response = await contactsInstance.get("/");
  // console.log(response);
  return response.data;
};

export const addFollower=async(id, followers)=>{
   await contactsInstance.put(`/${id}`,{
    followers,
    isFollowed:true,
  });
}

export const deleteFollower=async(id, followers)=>{
  await contactsInstance.put(`/${id}`,{
   followers,
   isFollowed:false,
 });
}