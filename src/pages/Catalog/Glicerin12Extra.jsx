import Card from "../../components/Card/Card";

function Glicerin12Extra() {
	return (
		<>
			<h1 className="title">
				Премикс 12 мл <span>EXTRA/SALT</span>
			</h1>
			<div className="all-goods _mob">
				<span>12</span> товарів
			</div>

			<section className="taste">
				<div className="taste__content">
					<div className="taste__body">
						<Card
							className="taste__card"
							title="BLUEBERRY JAM"
							subtitle="Чорничний джем з маслом і тостом"
							price={100}
						/>
						<Card
							className="taste__card"
							title="BLUEBERRY JAM"
							subtitle="Чорничний джем з маслом і тостом"
							price={100}
						/>
						<Card
							className="taste__card"
							title="BLUEBERRY JAM"
							subtitle="Чорничний джем з маслом і тостом"
							price={100}
							newTaste
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Glicerin12Extra;
