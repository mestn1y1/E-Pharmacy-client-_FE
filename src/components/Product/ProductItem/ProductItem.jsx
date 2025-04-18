import css from "./ProductItem.module.css";
import { Button } from "../../Button/Button";
import { Link } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductById } from "../../../redux/products/operations";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import { addToCart } from "../../../redux/cart/operations";
import AuthModal from "../../Modals/AuthModal/AuthModal";
import { ModalWrap } from "../../Modals/ModalWrap/ModalWrap";

export default function ProductItem({ item }) {
  const { photo, price, name, category, _id } = item;
  const { isLoggedIn } = useAuth();
  const [modalAuthOpen, setAuthModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFetchDetails = () => {
    dispatch(fetchProductById(_id)).then(() => {
      navigate("/product");
    });
  };

  const addedToCart = () => {
    if (!isLoggedIn) {
      setAuthModalOpen(true);
    } else {
      dispatch(addToCart({ productId: _id }));
      console.log("added to cart");
    }
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
          <Button
            text="Add to cart"
            className={css.btn}
            onClick={addedToCart}
          />
          <Link className={css.link} onClick={handleFetchDetails}>
            Details
          </Link>
        </div>
      </div>
      <ModalWrap
        isOpen={modalAuthOpen}
        handleClose={() => setAuthModalOpen(false)}
      >
        <AuthModal onClose={() => setAuthModalOpen(false)} />
      </ModalWrap>
    </>
  );
}
