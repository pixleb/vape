import Card from "../../components/Card/Card";

function Nikobuster() {
	return (
		<>
			<h1 className="title">Нiкобустери</h1>
			<div className="all-goods _mob">
				<span>12</span> товарів
			</div>

			<section className="taste">
				<div className="taste__content">
					<div className="taste__body">
						<Card
							className="taste__card"
							title="НІКОБУСТЕР"
							subtitle="100 мг / 1,8 мл"
							price={100}
						/>
						<Card
							className="taste__card"
							title="НІКОБУСТЕР"
							subtitle="500 мг / 1,5 мл"
							price={100}
						/>
						<Card
							className="taste__card"
							title="НІКОБУСТЕР"
							subtitle="500 мг / 3 мл"
							price={100}
							newTaste
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Nikobuster;
