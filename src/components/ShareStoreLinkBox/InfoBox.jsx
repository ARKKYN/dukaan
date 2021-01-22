import React from 'react';
import Icons from '../Icons';

export default function ShareStoreLinkBox() {
	return (
		<div
			className="p-3 bg-white rounded-lg mb-6 inline-block p-5 shadow width-368"
			style={{height: '222px'}}
		>
			<p className="font-galanogrotesque leading-normal mb-3">
				Your customers can visit your online store and place the orders
				from this link.
			</p>
			<a href="https://mydukaan.io/manosupermarket" rel="noreferrer" target="_blank" className="text-lg underline font-galanogrotesque leading-normal font-medium text-orange">
				mydukaan.io/manosupermarket
			</a>
			<p className="font-galanogrotesque leading-normal mt-6 mb-3 font-medium">
				Share via
			</p>
			<Icons name="whatsapp" />
			<Icons name="facebook" />
			<Icons name="twitter" />
		</div>
	);
}
