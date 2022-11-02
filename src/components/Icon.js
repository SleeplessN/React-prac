export const Icon = ({ type }) => {
  const path = `./assets/icons/type=${type}.svg`;
  const altText = `${type}-icon`;

  return <img src={path} alt={altText} />;
};
