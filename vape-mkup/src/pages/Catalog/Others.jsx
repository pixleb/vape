import Card from "../../components/Card/Card";

function Others() {
	return (
		<>
			<h1 className="title">Iнше</h1>
			<div className="all-goods _mob">
				<span>12</span> товарів
			</div>

			<section className="taste">
				<div className="taste__content">
					<div className="taste__body">
						<Card
							className="taste__card"
							title="БРЕЛОК-ВІДКРИВАЧКА"
							subtitle=""
							price={20}
						/>
					</div>
				</div>
			</section>
		</>
	);
}

export default Others;
