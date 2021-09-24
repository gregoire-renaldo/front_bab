import BoatItem from './BoatItem';
import classes from './BoatList.module.css';

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.boats.map((boat) => (
        <BoatItem
        key={boat.id}
          id={boat.id}
          name={boat.name}
          // image={meetup.image}
          // title={meetup.title}
          // address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
