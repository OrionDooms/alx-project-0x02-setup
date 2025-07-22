import React  from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
	return (
	<div className="justify-center items-center flex-col h-screen">
		<h1 >Home page</h1>
		<div className="grid grid-cols-3 space-y-5">
            {
            [1,2,3,4,5].map((title, index) => (
                <Card
                key={index}
                title={`Title ${title}`} 
                content={`Content for card ${index}`} />
                ) )
            }
            </div>
	</div>
	);
};
export default Home;