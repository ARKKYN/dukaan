import React, {memo} from 'react';
import image from '../../images/rectangle-47.png';
import './orderInfoBox.css';

function OrderInfoBox({orderId, date, quantity, imageSrc = image , isNew = false}) {
	return (
		<div className="bg-white p-4  inline-block shadow rounded-lg width-368" style={{height: "148px"}}>
			<div className="overflow-auto">
				<span className="font-medium   float-left l-0">
					Order #{orderId}
				</span>
				<span className={`font-medium text-xs inline-block uppercase rounded-1 text-white bg-green uppercase ml-2 orderInfoBox--label ${isNew ? "" : "hidden"}`}>
					NEW
				</span>
				<span className="font-regular text-sm  float-right">
					{date}
				</span>
			</div>
			<div className="mt-4 flex">
				<div>
					<img src={imageSrc} width="80" height="80" alt="img" />
				</div>
				<div className="pl-4 flex-grow">
					<p className="text-grey-100 text-base">{quantity} item</p>
					<p className="text-niceBlue text-lg">₹79</p>
					<button className="orderInfoBox--button border border-solid border-grey-50 float-right rounded">
						Details
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="none"
                            viewBox="0 0 16 16"
                            className="inline ml-1"
						>
							<path
								fill="#1A181E"
								d="M4.777 13.723c-.336-.337-.366-.863-.091-1.234l.091-.106L9.16 8 4.777 3.617c-.336-.336-.366-.862-.091-1.233l.091-.107c.337-.336.863-.366 1.234-.091l.106.091L11.17 7.33c.336.336.367.863.092 1.234l-.092.106-5.053 5.053c-.37.37-.97.37-1.34 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
}

export default memo(OrderInfoBox);
