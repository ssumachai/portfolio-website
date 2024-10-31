import profilePic from '../assets/profilepicture.jpg'
import styles from './Card.module.css'

function Card(){
    const openLink = (url) => {window.open(url, "_blank", "noreferrer noopener")};
    
    return(
        <div className={styles.card}>
            <img className={styles.image} src={profilePic} alt="A picture of Sumachai"></img>
            <h2 className={styles.title}>Sumachai<br/>"Chai"<br/>Suksanguan</h2>
            <p className={styles.text}>Fun-seeking, challenge-driven, and eager to prove!  Lover of all types of Media and Entertainment</p>
            <div className={styles.buttonBox}>
                <button className={styles.LinkButton} onClick={() => openLink("https://www.linkedin.com/in/sumachai/")}>LinkedIn</button>
                <button className={styles.GitButton} onClick={() => openLink("https://github.com/ssumachai")}>Github</button>
            </div>
        </div>
    )
}

export default Card;