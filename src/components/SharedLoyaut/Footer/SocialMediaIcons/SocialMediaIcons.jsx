import css from "./SocialMediaIcons.module.css";
import { Icons } from "../../../Icons/Icons";
export default function SocialMediaIcons() {
  const socialLinks = [
    {
      to: "https://www.facebook.com/goITclub/",
      iconName: "facebook",
    },
    {
      to: "https://www.instagram.com/goitclub/",
      iconName: "instagram",
    },
    {
      to: "https://www.youtube.com/c/GoIT",
      iconName: "youtube",
    },
  ];
  return (
    <ul className={css.socialList}>
      {socialLinks.map(({ to, iconName }, index) => (
        <li key={index} className={css.iconItem}>
          <a
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className={css.link}
          >
            <Icons iconName={iconName} className={css.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
