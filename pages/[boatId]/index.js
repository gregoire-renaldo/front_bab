
import BoatDetail from "../../components/boats/BoatDetail";

export async function getStaticPaths() {
   const res = await fetch(`http://localhost:8000/boat/boats`);
   const data = await res.json();
   const paths = data.data.boats.map(boat => {
     console.log(`in map boat = ${typeof(boat._id)}`)
     console.log(`in map boat = ${boat._id}`)
    return {
      params: {
        boatId: boat._id.toString(),
      },
    };
  })
console.log(paths)

console.log("staticpath after before 2");

  return {
    paths : paths,
    fallback: false
  }
}

// impossible to use react hooks f: useRouter, to get the id in the url, but no need with context
export async function getStaticProps(context) {
  // page pregenerated during build, next will generate all the pages
  // fetch a single meetup
  console.log(`context=${typeof(context.params.boatId)}`);
  console.log('dans getStaticprops')
  const boatId = context.params.boatId;
  console.log(`boatIG in GSP = ${typeof(boatId)}`)
const res = await fetch('http://localhost:8000/boat/getBoat/'+boatId);
const data = await res.json();
console.log(`data = ${data}`)
console.log(JSON.stringify(data));

  return {
    props: {
      boatData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg",
        id: boatId,
        title: data.data.boat.name,
        address: "5, Gotham city",
        description: "this is the description",
      },
    },
    // props: {
    //   meetUpData: {
    //     image:
    //       "https://upload.wikimedia.org/wikipedia/commons/0/02/Moscow-City_%2836211143494%29.jpg",
    //     id: boatId,
    //     title: "title",
    //     address: "5, Gotham city",
    //     description: "this is the description",
    //   },
    // },
  };
}

function BoatDetails(props) {
  return (
    <BoatDetail
      image="https://source.unsplash.com/random/500x250"
      title={props.boatData.title}
      address="5, Gotham city"
    />
  );
}

export default BoatDetails;
