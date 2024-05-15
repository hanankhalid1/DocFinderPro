import axios from "axios";

const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: {
        'Authorization' : `Bearer ${API_KEY}` 
    }
})

const getCategories=()=>axiosClient.get('categories?populate=*');

const getDoctorList=()=>axiosClient.get('/doctors?populate=*')

const getDoctorByCategory = (category : any) => axiosClient.get('/doctors?filters[categories][Name][$in]='+category+"&populate=*");

const getDocotorById = (id : any) => axiosClient.get('/doctors/'+id+'?populate=*');

const bookAppointment = (data : any) => axiosClient.post('/appointments', data);
export default{
    getCategories,
    getDoctorList,
    getDoctorByCategory,
    getDocotorById,
    bookAppointment,
}