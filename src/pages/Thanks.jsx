import React from "react";
import ImgSrc from "../assets/img/catalog/blueberry.png";
import ButtonCheckout from "../components/UI/Buttons/ButtonCheckout";

import thanksImg from "../assets/img/thanks.png"

function Thanks({ setActivePage }) {
	return (
		<div className="thanks">
			<div className="thanks__content">
			    <div>
                    <img src={thanksImg} alt="thanks" 
                        style={{"padding-left": "24px", "padding-right": "24px", "width": "100%", "height": "auto"}} />
                
                </div>
				<h1 className="thanks__title">Дякуємо, ваше замовлення прийнято!</h1>
				<h2 className="thanks__subtitle">
					Наш менеджер опрацює його за лічені хвилини.
				</h2>
				{/*
				<div className="thanks__body">
					<table className="thanks__table">
						<tr>
							<td class="thanks__table-category">Замовлення</td>
							<td className="thanks__table-value">№345 від 22.02.2023</td>
						</tr>
						<tr>
							<td class="thanks__table-category">Тип оплати</td>
							<td className="thanks__table-value">Оплата при отриманні</td>
						</tr>
						<tr>
							<td class="thanks__table-category">Тип доставки</td>
							<td className="thanks__table-value">Самовивіз</td>
						</tr>
						<tr>
							<td class="thanks__table-category">Статус замовлення</td>
							<td className="thanks__table-value _status">Очікує оплати</td>
						</tr>
						<tr>
							<td class="thanks__table-category">Сума замовлення</td>
							<td className="thanks__table-value _summa">
								<span>3 459</span> грн
							</td>
						</tr>
					</table>
					<div className="thanks__table-mob">
						<div class="row">
							<span class="label">Замовлення</span>
							<span class="value">№345 від 22.02.2023</span>
						</div>
						<div class="row">
							<span class="label">Тип оплати</span>
							<span class="value">Оплата при отриманні</span>
						</div>
						<div class="row">
							<span class="label">Тип доставки</span>
							<span class="value">Самовивіз</span>
						</div>
						<div class="row">
							<span class="label">Статус замовлення</span>
							<span class="value _status">Очікує оплати</span>
						</div>
						<div class="row">
							<span class="label _summa">Сума замовлення</span>
							<span class="total-value">3 459 грн</span>
						</div>
					</div>
					<div className="thanks__images">
						<div className="thanks__images-container">
							<span className="thanks__images-count">{12}</span>
							<img className="thanks__img" src={ImgSrc} alt="" />
						</div>
					</div>
				</div>
                    */}
				<ButtonCheckout className="thanks__btn" onClick={() => setActivePage("catalog")}>
					Повернутися до каталогу
				</ButtonCheckout>
			</div>
		</div>
	);
}

export default Thanks;
