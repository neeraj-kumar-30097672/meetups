/* eslint-disable @next/next/no-img-element */
import classes from './MeetupDetail.module.scss';

function MeetupDetail(props: any) {
  return (
    <section className={classes.detail}>
      <img 
        src={props.image}
        alt={props.title}
      />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  )
}

export default MeetupDetail;