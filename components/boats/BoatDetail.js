import { Fragment } from "react";
import classes from './BoatDetail.module.css'

function BoatDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
    </section>
  );
}

export default BoatDetail;
