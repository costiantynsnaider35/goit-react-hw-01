import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.card}>
        <img className={s.avatar} src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.info}>@{tag}</p>
        <p className={s.info}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.info}>Followers</span>
          <span className={s.stats}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.info}>Views</span>
          <span className={s.stats}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.info}>Likes</span>
          <span className={s.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
