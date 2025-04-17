import css from "./ProductItem.module.css";
import { Button } from "../../Button/Button";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../../redux/products/operations";
export default function ProductItem({ item }) {
  const { photo, price, name, category, _id } = item;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFetchDetails = () => {
    dispatch(fetchProductById(_id)).then(() => {
      navigate("/product");
    });
  };

  return (
    <>
      <img src={photo} alt={name} className={css.img} />
      <div className={css.infoWrap}>
        <h2 className={css.title}>
          {name}
          <span>₴{price}</span>
        </h2>
        <p className={css.text}>{category}</p>
        <div className={css.btnBlock}>
          <Button text="Add to cart" className={css.btn} />
          <Link className={css.link} onClick={handleFetchDetails}>
            Details
          </Link>
        </div>
      </div>
    </>
  );
}
