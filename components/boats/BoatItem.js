import {useRouter } from 'next/router'

import Card from '../ui/Card';
import classes from './BoatItem.module.css';

function BoatItem(props) {
  // programmatic navigation
  const router = useRouter()
  // function to navigate
  function showDetailHandler () {
    console.log(props)
    // router.query
    router.push('/' + props.id)
    console.log(`in router ${props.id}`)
  }
  return (
    <li className={classes.item}>
      <Card>
        <div>
          name : {props.name}
        </div>
        {/* <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div> */}
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default BoatItem;
