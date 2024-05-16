import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategories = () => axiosClient.get("categories?populate=*");

const getDoctorList = () => axiosClient.get("/doctors?populate=*");

const getDoctorByCategory = (category: any) =>
  axiosClient.get(
    "/doctors?filters[categories][Name][$in]=" + category + "&populate=*"
  );

const getDocotorById = (id: any) =>
  axiosClient.get("/doctors/" + id + "?populate=*");

const bookAppointment = (data: any) => axiosClient.post("/appointments", data);

const sendEmail = (data: any) => axios.post("/api/sendEmail", data);

const getUserBookingList = (userEmail: any) =>
  axiosClient.get(
    "/appointments?[filters][Email][$eq]=" +
      userEmail +
      "&populate[doctors][populate][Image][populate][0]=url&populate=*"
  );

const deleteBooking = (id: any) => axiosClient.delete("/appointments/"+id);

export default {
  getCategories,
  getDoctorList,
  getDoctorByCategory,
  getDocotorById,
  bookAppointment,
  sendEmail,
  getUserBookingList,
  deleteBooking,
};
