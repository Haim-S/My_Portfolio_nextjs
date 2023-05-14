
import giftStore from "../public/assets/projects/giftStore.jpeg"
import shosStore from "../public/assets/projects/shosStore.png"
import okd from "../public/assets/projects/okd.png"
import myzoo from "../public/assets/projects/myZoo.png"
import mentorcruise from "../public/assets/projects/mentorcruise.png"


const PAGES_PATH = [
{
        linkLabel: "Home",
        path: "/"
},
{
    linkLabel: "About",
    path: "/#about"
},
{
    linkLabel: "Skills",
    path: "/#skills"
},
{
    linkLabel: "Projects",
    path: "/#projects"
},
{
    linkLabel: "Resume",
    path: "/resume"
},
{
    linkLabel: "Contact",
    path: "/#contact"
},

];

const MY_PROJECTS = [
    {id: 1, img: "/../public/assets/projects/giftStore.jpeg", titleName: "Gift Store", titleFramework: "React JS / Css / MongoDB", about: " This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.", githubUrl: "https://github.com/Haim-S/Store-GiftShop", diployUrl: "https://giftstore-client.onrender.com", Technologies: ["React", "Javascript", "styled", "Rest Api", "Tokens"]},
    {id: 6, img: "/../public/assets/projects/okd_2.png", titleName: "Gift Store", titleFramework: "Next JS / Tailwind css / Redux", about: " This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.", githubUrl: "https://github.com/Haim-S/OKD_2", diployUrl: "https://okd-2.vercel.app/", Technologies: ["Next.js", "Javascript", "Tailwind css", "redux toolkit"]},
    {id: 2, img: "/../public/assets/projects/mentorcruise.png", titleName: "mentorcruise", titleFramework: "React JS / Mui / MongoDB", about: " This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.", githubUrl: "https://github.com/Haim-S/mentorcruise_2", diployUrl: "", Technologies: ["React", "Javascript", "MUI", "Socket.io", "Tokens", "Yup"]},
    {id: 3, img: "/../public/assets/projects/myZoo.png", titleName: "My Zoo", titleFramework: "React JS / Mui / MongoDB", about: " This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.", githubUrl: "https://github.com/Haim-S/My_Zoo", diployUrl: "https://my-zoo-client.onrender.com", Technologies: ["React", "Javascript", "Mui", "Tokens"]},
    {id: 4, img: "/../public/assets/projects/okd.png", titleName: "OKD", titleFramework: "React JS / Css / MongoDB", about: " This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.", githubUrl: "https://github.com/Haim-S/OKD/tree/main", diployUrl: "https://okd-studio.netlify.app/", Technologies: ["React", "Javascript", "styled", "Rest Api", "Tokens"]},
    {id: 5, img: "/../public/assets/projects/shosStore.png", titleName: "Shos Store", titleFramework: "JS / Bootstrap / MongoDB", about: " This app was built using React JS and is hosted on Firebase. Users are able to search properties based on an Address, City, or ZIP code to retrieve a list of active properties currently for sale. You will be able to view property information as well as the specific location of the property integrated with the Google Maps API. User authentication is available so you can signup and signin to your account with an email address in order to save your favorite properties. This is made possible with Zillow API.", githubUrl: "https://github.com/Haim-S/OKD/tree/version_1", diployUrl: "https://okd-studio.netlify.app/", Technologies: ["Javascript", "Bootstrap", "Tokens"]},
]



export {PAGES_PATH, MY_PROJECTS};