import React from "react";

import { useDispatch } from "react-redux";
import { setCatalog } from "../../redux/actions/catalog";

import Img1 from "../../assets/img/catalog-category/01.png";
import Img2 from "../../assets/img/catalog-category/02.png";
import Img3 from "../../assets/img/catalog-category/03.png";
import Img4 from "../../assets/img/catalog-category/04.png";
import Img5 from "../../assets/img/catalog-category/05.png";

function Catalog({ activePage, setActivePage }) {
    
    const dispatch = useDispatch();
    
    const openCatalog = index => {
        dispatch(setCatalog(index));
		setActivePage("home");
    }
    
	return (
		<>
			<div className="taste-wrapper">
				<section className="catalog-category">
					<div className="catalog-category__content">
						<div className="catalog-category__top">
							<div className="catalog-category__top-item catalog-category__item _1"
							    onClick = {() => openCatalog(0)}>
								<div className="catalog-category__item-left">
									<h2 className="catalog-category__title">Премiкс 18 мл</h2>
									<h3 className="catalog-category__subtitle">Organic</h3>
								</div>
								<img
									src={Img1}
									alt="Премiкс 18 мл"
									className="catalog-category__item-img"
								/>
							</div>
							<div className="catalog-category__top-item catalog-category__item _2"
							    onClick = {() => openCatalog(1)}>
								<div className="catalog-category__item-left">
									<h2 className="catalog-category__title">Премiкс 12 мл</h2>
									<h3 className="catalog-category__subtitle">Salt</h3>
								</div>
								<img
									src={Img2}
									alt="Премiкс 12 мл"
									className="catalog-category__item-img"
								/>
							</div>
						</div>
						<div className="catalog-category__bottom">
							<div className="catalog-category__bottom-item catalog-category__item _3"
							    onClick = {() => openCatalog(2)}>
								<div className="catalog-category__bottom-item catalog-category__item">
									<div className="catalog-category__item-left">
										<h2 className="catalog-category__title">Гліцерин</h2>
									</div>
									<img
										src={Img3}
										alt="Гліцерин"
										className="catalog-category__item-img"
									/>
								</div>
							</div>
							<div className="catalog-category__bottom-item catalog-category__item _4"
							    onClick = {() => openCatalog(3)}>
								<div className="catalog-category__item-left">
									<h2 className="catalog-category__title">Нікотин</h2>
								</div>
								<img
									src={Img4}
									alt="Нікотин"
									className="catalog-category__item-img"
								/>
							</div>
							<div className="catalog-category__bottom-item catalog-category__item _5"
							    onClick = {() => openCatalog(4)}>
								<div className="catalog-category__item-left">
									<h2 className="catalog-category__title">Мерч та інше</h2>
								</div>
								<img
									src={Img5}
									alt="Мерч та інше"
									className="catalog-category__item-img"
								/>
							</div>
						</div>
					</div>
					<div href="#" className="catalog-category__content _mob">
						<a className="catalog-category__top-item catalog-category__item _1"
						    onClick = {() => openCatalog(0)}>
							<div className="catalog-category__item-left">
								<h2 className="catalog-category__title">Премiкс 18 мл</h2>
								<h3 className="catalog-category__subtitle">Organic</h3>
							</div>
							<img
								src={Img1}
								alt="Премiкс 18 мл"
								className="catalog-category__item-img"
							/>
						</a>
						<a
							href="#"
							className="catalog-category__top-item catalog-category__item _2"
							onClick = {() => openCatalog(1)}
						>
							<div className="catalog-category__item-left">
								<h2 className="catalog-category__title">Премiкс 12 мл</h2>
								<h3 className="catalog-category__subtitle">Salt</h3>
							</div>
							<img
								src={Img2}
								alt="Премiкс 12 мл"
								className="catalog-category__item-img"
							/>
						</a>
						<a
							href="#"
							className="catalog-category__bottom-item catalog-category__item _3"
							onClick = {() => openCatalog(2)}
						>
							<div className="catalog-category__item-left">
								<h2 className="catalog-category__title">Гліцерин</h2>
							</div>
							<img
								src={Img3}
								alt="Гліцерин"
								className="catalog-category__item-img"
							/>
						</a>
						<a
							href="#"
							className="catalog-category__bottom-item catalog-category__item _4"
							onClick = {() => openCatalog(3)}
						>
							<div className="catalog-category__item-left">
								<h2 className="catalog-category__title">Нікотин</h2>
							</div>
							<img
								src={Img4}
								alt="Нікотин"
								className="catalog-category__item-img"
							/>
						</a>
						<a
							href="#"
							className="catalog-category__bottom-item catalog-category__item _5"
							onClick = {() => openCatalog(4)}
						>
							<div className="catalog-category__item-left">
								<h2 className="catalog-category__title">Мерч та інше</h2>
							</div>
							<img
								src={Img5}
								alt="Мерч та інше"
								className="catalog-category__item-img"
							/>
						</a>
					</div>
				</section>
			</div>
		</>
	);
}

export default Catalog;
