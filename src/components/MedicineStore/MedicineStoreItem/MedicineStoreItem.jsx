import { Link } from "react-router";
import { Icons } from "../../Icons/Icons";
import css from "./MedicineStoreItem.module.css";
import { useAuth } from "../../../hooks/useAuth";
import { useState } from "react";
import { ModalWrap } from "../../Modals/ModalWrap/ModalWrap";
import AuthModal from "../../Modals/AuthModal/AuthModal";
import { useDispatch } from "react-redux";
import { fetchStoreById } from "../../../redux/stores/operations";

export default function MedicineStoreItem({ store }) {
  const { address, city, name, phone, rating, status, _id } = store;
  const { isLoggedIn } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleLinkClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleFetch = () => {
    dispatch(fetchStoreById(_id));
    [dispatch, _id];
  };
  return (
    <>
      <div className={css.decoration}>
        <span className={css.decorationElement}></span>
        <span className={css.decorationElement}></span>
        <span className={css.decorationElement}></span>
      </div>
      <Link
        className={css.linkTo}
        to={`/medicine-store/${_id}`}
        onClick={handleFetch}
      >
        Details store
      </Link>
      <div className={css.headerItem}>
        <h3 className={css.itemName}>{name}</h3>
      </div>
      <div className={css.addressBlock}>
        <Icons iconName="map" className={css.icon} />
        <div>
          <p className={css.text}>{address}</p>
          <p className={css.text}>{city}</p>
        </div>
      </div>
      <p className={css.textNumber}>
        <Icons iconName="phone" className={css.icon} /> {phone}
      </p>
      <div className={css.infoBlock}>
        <Link className={css.link} to="/medicine" onClick={handleLinkClick}>
          Visit store
        </Link>
        <p className={css.ratingBlock}>
          <Icons iconName="star" className={css.star} />
          {rating}
        </p>
        <p className={status === "Open" ? css.statusOpen : css.statusClosed}>
          {status}
        </p>
      </div>
      <ModalWrap isOpen={showModal} handleClose={() => setShowModal(false)}>
        <AuthModal onClose={() => setShowModal(false)} />
      </ModalWrap>
    </>
  );
}
