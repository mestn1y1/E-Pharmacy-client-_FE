import icons from "/images/icons.svg";

export const Icons = ({ iconName, className, style }) => {
  return (
    <svg className={className} style={style} aria-hidden="true">
      <use href={`${icons}#icon-${iconName}`} />
    </svg>
  );
};
