
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
    {id: 1, img: "/../public/assets/projects/giftStore.jpeg", titleName: "Gift Store", titleFramework: "React JS / Css / MongoDB", about: "This app was built using React JS and is hosted on MongoDB. A user enters only by registering on the website, and there is a discount percentage on the store, each purchase goes to the shopping cart, and then an order is made, which can only be canceled if a week has not passed, and if he canceled an order several times according to the week that has passed, this is written in the data and according to this Gives him random discount percentages.", githubUrl: "https://github.com/Haim-S/Store-GiftShop", diployUrl: "https://giftstore-client.onrender.com", Technologies: ["React", "Javascript", "styled", "Rest Api", "Tokens"]},
    {id: 6, img: "/../public/assets/projects/okd_2.png", titleName: "OKD App", titleFramework: "Next JS / Tailwind css / Redux", about: "This app was built using Next JS, I haven't finished the application, but on the server side I wrote both in mysql and mongoose.The website focuses on uploading the company's projects and accessibility and has two languages ​​that you can choose.", githubUrl: "https://github.com/Haim-S/OKD_2", diployUrl: "https://okd-2.vercel.app/", Technologies: ["Next.js", "Javascript", "Tailwind css", "redux toolkit"]},
    {id: 2, img: "/../public/assets/projects/mentorcruise.png", titleName: "mentorcruise", titleFramework: "React JS / Mui / MongoDB", about: "This app was built using React JS and is hosted on MongoDB, website for entrepreneurs and consultants, while no entrepreneur can see his friend but only the consultants, and each friend needs to be approved so that he can chat with him on the chat page.", githubUrl: "https://github.com/Haim-S/mentorcruise_2", diployUrl: null, Technologies: ["React", "Javascript", "MUI", "Socket.io", "Tokens", "Yup"]},
    {id: 3, img: "/../public/assets/projects/myZoo.png", titleName: "My Zoo", titleFramework: "React JS / Mui / MongoDB", about: "This is a simple application, it is not responsive, but it has security when entering the site with toknes, and crud", githubUrl: "https://github.com/Haim-S/My_Zoo", diployUrl: "https://my-zoo-client.onrender.com", Technologies: ["React", "Javascript", "Mui", "Tokens"]},
    {id: 4, img: "/../public/assets/projects/okd.png", titleName: "OKD", titleFramework: "React JS / Css / MongoDB", about: "This app was built using React JS and is hosted on MongoDB.and I used the AOS design library.", githubUrl: "https://github.com/Haim-S/OKD/tree/main", diployUrl: "https://okd-studio.netlify.app/", Technologies: ["React", "Javascript", "styled", "Rest Api", "Tokens"]},
    {id: 5, img: "/../public/assets/projects/shosStore.png", titleName: "Shos Store", titleFramework: "JS / Bootstrap / MongoDB", about: "A vanilla application, which also has security token, and there is a normal user difference that has normal possibilities to differentiate administrator options.", githubUrl: "https://github.com/Haim-S/OKD/tree/version_1", diployUrl: null, Technologies: ["Javascript", "Bootstrap", "Tokens"]},
]



export {PAGES_PATH, MY_PROJECTS};