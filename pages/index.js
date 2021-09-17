// import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";


const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: "a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg",
    address: "Some address",
    description: "description",
  },
  {
    id: 'm2',
    title: "a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg",
    address: "Some address",
    description: "description",
  },
];

// function HomePage() {
//   return (
//     <Layout><MeetupList meetups={DUMMY_MEETUPS} /></Layout>
//   );
// }


// // not okay for seo; 2 cycles for rendering, 1 cycle with empty []
// function HomePage(props) {
//   const [loadedMeetups, setLoadedMeetups] = useState([])

//   useEffect(() => {
//     // send http request & fetch data async await
//     //
//     setLoadedMeetups(DUMMY_MEETUPS);
//     // return () => {
//     //   cleanup
//     // }
//   }, [])

//   return (
//     <Layout>
//       <MeetupList meetups={loadedMeetups} />
//     </Layout>
//   );
// }



// not okay for seo; 2 cycles for rendering, 1 cycle with empty []
function HomePage(props) {
  // no need for useState and useEffect

  return (
    <Layout>
      <MeetupList meetups={props.meetups} />
    </Layout>
  );
}



// for fetch data, in page component file
// next look for this function  getStaticProps; to prepare props for this page,
// next wait for the promise to resolve, not executed on client

export async function getStaticProps() {
  // fetch data from an API
  // return object
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    // if data change regurlaly revalidate property, incremental generation, number: seconds
    // if resusts coming to the page, page revalidate every 1 sec
    revalidate: 1
  };
}


// // difference with getStaticProps : will NOT run on build process, always on server after deployment
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

// // fetch data from api
//   return {
//     props: DUMMY_MEETUPS
//   }
// }

export default HomePage;
