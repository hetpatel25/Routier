// Style sheet
import styles from "./Profile.module.css";

// Images
import avatar from "../Assets/profile/avatar_profile.png";
import logo from "../Assets/profile/logo_profile.svg";
import profileHome from "../Assets/home/profile_home.svg";
import fav from "../Assets/profile/fav_profile.png";
import review from "../Assets/profile/review_profile.png";

// Dependencies
import { Link } from "react-router-dom";
import { useState } from "react";
import DisplayRating from "./DisplayRating";

const Profile = () => {
  const [userName, setUserName] = useState("name");
  const [userEmail, setUserEmail] = useState("abc@gmail.com");
  const [userTrips, setUserTrips] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const [userFavs, setUserFavs] = useState([]);

  const handleMenuClick = () => {
    document.getElementById("navlinksCont2").style.display = "flex";
  };
  const handleCloseClick = () => {
    document.getElementById("navlinksCont2").style.display = "none";
  };

  const removeFromFav = () => {
    const userFavs2 = userFavs.filter();
    setUserFavs(userFavs2);
  };

  const getTrips = () => {
    document.getElementById("reviewCont").style.display = "none";
    document.getElementById("favCont").style.display = "none";
    document.getElementById("tripsCont").style.display = "flex";
    document.getElementById("reviews").style.backgroundColor = "#fff";
    document.getElementById("fav").style.backgroundColor = "#fff";
    document.getElementById("trips").style.backgroundColor = "#d9d9d9";
  };
  const getReviews = () => {
    document.getElementById("reviewCont").style.display = "flex";
    document.getElementById("favCont").style.display = "none";
    document.getElementById("tripsCont").style.display = "none";
    document.getElementById("reviews").style.backgroundColor = "#d9d9d9";
    document.getElementById("fav").style.backgroundColor = "#fff";
    document.getElementById("trips").style.backgroundColor = "#fff";
  };
  const getFav = () => {
    document.getElementById("reviewCont").style.display = "none";
    document.getElementById("favCont").style.display = "flex";
    document.getElementById("tripsCont").style.display = "none";
    document.getElementById("reviews").style.backgroundColor = "#fff";
    document.getElementById("fav").style.backgroundColor = "#d9d9d9";
    document.getElementById("trips").style.backgroundColor = "#fff";
  };
  return (
    <>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.logoCont}>
          <img src={logo} className={styles.logo} alt="logo" />
        </div>
        <div className={styles.navlinksCont}>
          <Link to="/home" className={styles.alerts}>
            Home
          </Link>
          <Link to="/aboutus" className={styles.trips}>
            About Us
          </Link>
          <Link to="/profile" className={styles.profileIconCont}>
            <img src={profileHome} className={styles.profileIcon} />
          </Link>
        </div>
        <div className={styles.menuIcon}>
          <span onClick={handleMenuClick} className="material-symbols-outlined">
            menu
          </span>
        </div>
        <div className={styles.navlinksCont2} id="navlinksCont2">
          <div className={styles.closeIcon}>
            <span
              onClick={handleCloseClick}
              className="material-symbols-outlined"
            >
              close
            </span>
          </div>
          <Link to="/profile" className={styles.profileIconCont}>
            <img src={profileHome} className={styles.profileIcon} />
          </Link>
          <Link to="/home" className={styles.alerts}>
            Home
          </Link>
          <Link to="/aboutus" className={styles.trips}>
            About Us
          </Link>
        </div>
      </nav>
      <main className={styles.mainCont}>
        {/* Personal info */}
        <div className={styles.personalCont}>
          <img src={avatar} className={styles.avatar} />
          <p className={styles.nametxt}>{userName}</p>
          <p className={styles.emailtxt}>{userEmail}</p>
          <button
            className={`${styles.options} ${styles.tripsOption}`}
            id="trips"
            onClick={getTrips}
          >
            Trips
          </button>
          <button className={styles.options} id="reviews" onClick={getReviews}>
            Reviews
          </button>
          <button className={styles.options} id="fav" onClick={getFav}>
            Favorites
          </button>
        </div>
        {/* Trips */}
        <div
          className={`${styles.profileCont} ${styles.tripsCont}`}
          id="tripsCont"
        >
          <div className={styles.tripsTitle}>
            <p className={styles.profileTitle}>Places</p>
            <p className={styles.profileTitle}>Experience</p>
          </div>
          <div className={styles.expCont}>
            {userTrips.map((trip) => {
              return (
                <div className={styles.expBox}>
                  <p className={styles.expTitle}>{trip.title}</p>
                  <p>
                    <DisplayRating rate={trip.rating} />
                  </p>
                </div>
              );
            })}

            {/* Remove this */}
            <div className={styles.expBox}>
              <p className={styles.expTitle}>test</p>
              <p>
                <DisplayRating rate={3} />
              </p>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div
          className={`${styles.profileCont} ${styles.reviewCont}`}
          id="reviewCont"
        >
          <div className={styles.tripsTitle}>
            <p className={styles.profileTitle}>Reviews</p>
          </div>
          <div className={styles.expCont}>
            {userReviews.map((Review) => {
              return (
                <div className={styles.favBox}>
                  <div className={styles.favcontent}>
                    <div className={styles.favRating}>
                      <DisplayRating rate={Review.rating} />
                    </div>
                    <p className={styles.reviewTitle}>{Review.title}</p>
                    <p className={styles.reviewDesc}>
                      {Review.desc}
                    </p>
                  </div>
                  <img src={Review.img} className={styles.favImg} />
                </div>
              );
            })}
            <div className={styles.favBox}>
              <div className={styles.favcontent}>
                <div className={styles.favRating}>
                  <DisplayRating rate={4} />
                </div>
                <p className={styles.reviewTitle}>test</p>
                <p className={styles.reviewDesc}>
                  All the team, specially Murad, were very kind and profesional.
                  I will repeat the experiencia for sure. All the team,
                  specially Murad, were very kind and profesional. I will repeat
                  the experiencia for sure.
                </p>
              </div>
              <img src={review} className={styles.favImg} />
            </div>
          </div>
        </div>
        {/* Favorites */}
        <div className={`${styles.profileCont} ${styles.favCont}`} id="favCont">
          <div className={styles.tripsTitle}>
            <p className={styles.profileTitle}>Favorites</p>
          </div>
          <div className={styles.expCont}>
            {userFavs.map((Fav) => {
              return (
                <div className={styles.favBox}>
                  <img src={Fav.img} className={styles.favImg} />
                  <div className={styles.favcontent}>
                    <div className={styles.favHead}>
                      <p className={styles.favTitle}>{Fav.title}</p>
                      <button
                        className={styles.removeFav}
                        onClick={removeFromFav}
                      >
                        Remove from Favorite
                      </button>
                    </div>
                    <div className={styles.favRating}>
                      <DisplayRating rate={Fav.rating} />
                    </div>
                    <p className={styles.favDesc}>{Fav.desc}</p>
                  </div>
                </div>
              );
            })}
            <div className={styles.favBox}>
              <img src={fav} className={styles.favImg} />
              <div className={styles.favcontent}>
                <div className={styles.favHead}>
                  <p className={styles.favTitle}>test</p>
                  <button className={styles.removeFav} onClick={removeFromFav}>
                    Remove from Favorite
                  </button>
                </div>
                <div className={styles.favRating}>
                  <DisplayRating rate={5} />
                </div>
                <p className={styles.favDesc}>
                  Khaleej Al Arabi Street Aloft Abu Dhabi Hotel, Abu Dhabi
                  United Arab Emirates
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;