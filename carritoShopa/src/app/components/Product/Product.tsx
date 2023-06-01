import styles from "./artist.module.css";

type ArtistProps = {
  img: string
  name: string;
  song: string;
  views: string | number;
}

function Artist(props: ArtistProps) {
    return (
      <div className={styles.center}>
          <img src={props.img} />
          <h2 className='artist'>{props.name}</h2>
          <p className="song">{props.song}</p>
          <p className='views'>{props.views}</p>
      </div>
    );
  }

  export default Artist;