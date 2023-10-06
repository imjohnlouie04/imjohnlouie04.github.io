import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userImage: require("@/assets/me.jpeg"),
    about: {
      title: "About Me",
      description:
        "I'm a Front End UI Designer who's knowledgeable and experienced in working with UX Designers and an enthusiast photographer",
    },
    personal: {
      name: "John Louie Binas",
      position: "Front End UI / UX Developer",
      address: "Dasmarinas City, Cavite",
      contact: "09212299573",
      email: "imjohnlouie@gmail.com",
    },
    work: [
      {
        company: "Outliant",
        position: "VueJS | TailwindCSS | F/E UI",
        yearStart: "August 2020",
        yearEnd: "October 2023",
        location: "Barton Springs, Austin, TX 78704, United States",
      },
      {
        company: "W-Tech Solutions Inc.",
        position: "Senior Front End Developer",
        yearStart: "June 2017",
        yearEnd: "March 2022",
        location: "Magallanes, Eco Plaza Bldg",
      },
      {
        company: "Steven Leach Manila",
        position: "UI / UX Designer",
        yearStart: "March 2017",
        yearEnd: "June 2017",
        location: "Makati",
      },
      {
        company: "UpNixt",
        position: "Front End UI / UX Designer",
        yearStart: "June 2015",
        yearEnd: "Oct 2016",
        location: "Taguig",
      },
      {
        company: "TravelZingo",
        position: "Front End UI / UX Designer",
        yearStart: "Sept 2014",
        yearEnd: "June 2015",
        location: "Taguig",
      },
      {
        company: "Ubook",
        position: "Front End UI / UX Designer",
        yearStart: "Feb 2013",
        yearEnd: "Apr 2014",
        location: "Makati",
      },
    ],
    activities: [
      {
        name: "Ideaspace",
        projectName: "PinoyTravel",
        yearStart: "Mar 2014",
        yearEnd: "Mar 2014",
        description: [
          {
            text:
              "Solve the problem for provincial bus traveler to book online instead of queing on the bus station",
          },
          {
            text: "Provide Online Bus Booking",
          },
        ],
      },
      {
        name: "Startup Weekend Manila",
        projectName: "MentorsDojo",
        yearStart: "Aug 2012",
        yearEnd: "Aug 2012",
        description: [
          {
            text:
              "Provide solution for the mentors and mentees to meet and talk and share their experience",
          },
        ],
      },
    ],
    social: [
      {
        socialName: "LinkedIn",
        link: "https://www.linkedin.com/in/imjohnlouie/",
      },
      {
        socialName: "Facebook",
        link: "https://www.facebook.com/johnlouie04",
      },
    ],
    education: [
      {
        school: "Technological University of the Philippines",
        course: "Graphic Arts and Printing Technology",
        yearStart: "2009",
        yearEnd: "2010",
      },
    ],
    skills: [
      {
        name: "VueJS",
        ratings: "4",
      },
      {
        name: "HTML5",
        ratings: "5",
      },
      {
        name: "CSS3",
        ratings: "5",
      },
      {
        name: "SASS",
        ratings: "4",
      },
      {
        name: "ReactJS",
        ratings: "2",
      },
      {
        name: "Javascript",
        ratings: "4",
      },
      {
        name: "Adobe Photoshop",
        ratings: "4",
      },
      {
        name: "Adobe Illustrator",
        ratings: "4",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
