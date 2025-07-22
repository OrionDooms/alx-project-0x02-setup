import React  from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
	return (
	<div className="Flex justify-center item-center h-screen">
	<h1>Home page</h1>
	<Card title="card1" content="info" />
	</div>
	);
};
export default Home;