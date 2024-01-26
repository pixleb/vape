import Card from "../../components/Card/Card";

function Glicerin() {
	return (
		<>
			<h1 className="title">Глiцерин</h1>
			<div className="all-goods _mob">
				<span>12</span> товарів
			</div>

			<section className="taste">
				<div className="taste__content">
					<div className="taste__body">
						<Card
							className="taste__card"
							title="ГЛІЦЕРИН"
							subtitle="1 л у пляшцi"
							price={100}
						/>
						<Card
							className="taste__card"
							title="ГЛІЦЕРИН"
							subtitle="1 л у пляшцi"
							price={100}
						/>
						<Card
							className="taste__card"
							title="ГЛІЦЕРИН"
							subtitle="15 мл у флаконi"
							price={100}
							newTaste
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Glicerin;
