
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://source.unsplash.com/random/500x250"
      title="title"
      address="5, Gotham city"
    />
  );
}

export async function getStaticPaths() {
  return {
    // fallback false = paths has all values, if true server generate page dynamically
    // paths == [ ]
    // fallback false means all supported routes are defined in path
    fallback: true,
    paths: [
      {
        params: {
        meetupId: 'm1'
        },
      },
      {
        params: {
        meetupId: 'm2'
        },
      },
    ]
  }
}

// impossible to use react hooks f: useRouter, to get the id in the url, but no need with context
export async function getStaticProps(context) {
  // page pregenerated during build, next will generate all the pages
  // fetch a single meetup

  const meetupId = context.params.meetupId
  console.log(meetupId)
  return {
    props: {
      meetUpData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg",
        id: meetupId,
        title: "title",
        address: "5, Gotham city",
        description: "this is the description",
      },
    },
  };
}

export default MeetupDetails;
