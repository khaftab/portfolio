export const projects = [
    {
        title: "Clothing Shop",
        // description: "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
        description:
            "It is a simple clothing shop website. It has password and social based authentication system. A user can add products to cart and it will keep persists even after closing the tab. Along with that they are allowed to purchase any product using our Stripe payment gateway.",
        image: "/images/crown.png",
        tags: ["React", "Redux", "Node", "Firebase"],
        source: "https://github.com/khaftab/crwn-clothing",
        visit: "https://crwn-prince-clothing.herokuapp.com",
        id: 0,
    },
    {
        title: "Repair Shop",
        description:
            "This is a repair shop website. Where a user can create a account. And can request a repair service on a product along with the problem that he/she is facing. It also have a admin panel. There admin can control the order status, product create/delete, customer details etc.",
        image: "/images/repair.png",
        tags: ["JAMSTACK", "Next JS", "PWA", "Firebase"],
        source: "",
        visit: "https://repair-today-production.vercel.app",
        id: 1,
    },
    {
        title: "Grocery Shop",
        description:
            "This is a beautiful looking grocery website cum mobile app. It includes all necessay features like social login, OTP login, add to cart etc. It also has fully flexible admin panel. Where admin can control the stock,process the order, give extra reward, simplified view of ordered item etc.",
        image: "/images/taza.png",
        tags: ["Next JS", "Tailwind", "Firebase", "PWA"],
        source: "",
        visit: "https://taza-bazar-production.vercel.app",
        id: 2,
    },
    {
        title: "Realtime Chat",
        description:
            "It is a realtime chat application. Where user can join a room and have conversation with other member of that room. It uses socket.io for the chat system. The backend is written in node JS. The backend is deployed in heroku and frontend is deplyed in netlify.",
        image: "/images/4.jpg",
        tags: ["React", "Socket.io", "Node JS", "Firebase"],
        source: "https://github.com/khaftab/chat-app-client",
        visit: "https://socket-io-chat-appp.netlify.app",
        id: 3,
    },
];

export const TimeLineData = [
    { year: 2017, text: "Started my journey" },
    { year: 2018, text: "Worked as a freelance developer" },
    { year: 2019, text: "Founded JavaScript Mastery" },
    { year: 2020, text: "Shared my projects with the world" },
    { year: 2021, text: "Started my own platform" },
];
