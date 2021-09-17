// our-domain-com/nested

import { Fragment } from "react";
import Link from 'next/link';

// NOT single page app, request every time
// we want to update,
function News() {
  return (
    <Fragment>
      <h1> list of news to fetch</h1>
      <ul>
        <li>
          <Link href="news/aaa">Item 1</Link>
        </li>
        <li>
          <a href="news/bbb">Item 2</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default News;
