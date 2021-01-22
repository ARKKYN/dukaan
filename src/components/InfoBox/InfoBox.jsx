import React from 'react';

export default function InfoBox({label, info }) {
	return (
		<div className="p-3 bg-white rounded-lg mb-6 ml-6 inline-block shadow width-368" style={{height:"99px"}}> 
			<p className="font-galanogrotesque leading-normal text-base text-grey-300  uppercase">{label}</p>
			<p className="text-3xl font-galanogrotesque leading-tight font-medium text-dark uppercase">
				{info}
			</p>
		</div>
	);
}
