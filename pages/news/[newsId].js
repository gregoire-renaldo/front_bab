// our-domain-com/nested/something-important
// or possible to create a folder with something important, and index.js and so on
// [newsId].s  square brckets for identifier

//  hook to fetch identifier
import { useRouter } from "next/router";
function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send a request to the backend API to fetch the newsId

  return <h1> Detail Page</h1>;
}

export default DetailPage;
