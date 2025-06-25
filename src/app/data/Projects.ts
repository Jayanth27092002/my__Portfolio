export interface Projects{
    id:String;
    title:String;
    description:String;
    stack:String[];
    imageUrl:String;
    timeTaken:String;
    link:String;
    isNew:boolean;

}


export const ProjectsData:Projects[]=[
    {
        id:"1",
        title:"Chat U",
        description:"A full Stack Chat  Application",
        stack:["Reactjs","NodeJs","MongoDb","Docker"],
        imageUrl:"https://img.freepik.com/premium-vector/chat-app-logo-sms-messenger-label-design-mobile-app-online-conversation-with-texting-message-ui-design-concept-vector-illustration_172533-1513.jpg",
        link:"https://chat-app-frontend-gamma-three.vercel.app/login",
        timeTaken:"2 weeks",
        isNew:true,
    },


    {
        id:"2",
        title:"Vehicle Renting WebApp",
        description:"A full Stack Renting  Application",
        stack:["Jsp","Java","SpringBoot"],
        imageUrl:"https://dianapps.com/blog/wp-content/uploads/2022/12/Add-a-heading-4.png",
        link:"https://github.com/Jayanth27092002/vehicle-rental-master",
        timeTaken:"3 weeks",
        isNew:true,
    },



    {    id:"3",
        title:"Weather Application",
        description:"A API based weather application",
        stack:["Reactjs","TailwindCss"],
        imageUrl:"https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
        link:"https://moonlit-bavarois-67d109.netlify.app/",
        timeTaken:"2 days",
        isNew:false,
    },


    {   id:"4",
        title:"Personalized Portfolio",
        description:"A Netflix Styled Portfolio",
        stack:["Angular","Typescript"],
        imageUrl:"https://repository-images.githubusercontent.com/673359426/a274f800-ed9c-4fe2-9734-c13d2e11b1c2",
        link:"",
        timeTaken:"3 days",
        isNew:false,
    },

    {    id:"5",
        title:"Shoping Cart",
        description:"Frontend Cart App",
        stack:["ReactJs","TailWindCss"],
        imageUrl:"https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg",
        link:"https://jade-basbousa-ee984a.netlify.app/",
        timeTaken:"1 day",
        isNew:false,
    }
]