import './App.css';
import InfoBox from './components/InfoBox';
import Navbar from './components/Navbar';
import OrderInfoBox from './components/OrderInfoBox';
import PanelButton from './components/PanelButton';
import ShareStoreLinkBox from './components/ShareStoreLinkBox';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="flex h-full">
			<Sidebar />
			<div className="flex-1">
				<Navbar />
				<main className="py-8 pl-8 pr-3">
					<div className="mb-5">
						<p className="text-xl font-galanogrotesque leading-normal font-medium text-dark inline">
							Share store link
						</p>
						<button
							className="border border-solid border-grey-50 float-right rounded"
							style={{padding: '2px 6px'}}
						>
							Last Month
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width={16}
								height={16}
								fill="none"
								viewBox="0 0 16 16"
								className="inline ml-1"
							>
								<path
									fill="#4D4D4D"
									d="M2.277 4.777c.337-.336.863-.366 1.234-.091l.106.091L8 9.16l4.383-4.383c.336-.336.862-.366 1.233-.091l.107.091c.336.337.366.863.091 1.234l-.091.106L8.67 11.17c-.336.336-.863.367-1.234.092l-.106-.092-5.053-5.053c-.37-.37-.37-.97 0-1.34z"
								/>
							</svg>
						</button>
					</div>
					<div className="flex">
						<div>
							<ShareStoreLinkBox />
						</div>
						<div>
							<InfoBox info="192" label="Orders" />
							<InfoBox info="₹1,55,920" label="Total Sales" />
							<InfoBox info="96" label="Store Views" />
							<InfoBox info="2,313" label="Product Views" />
						</div>
					</div>
					<div className="mb-6">
						<p className="text-xl font-galanogrotesque leading-normal font-medium inline text-dark">
							Active Orders
						</p>

						<button className=" border-none underline  border-grey-50 float-right">
							View All
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
					<div className="flex gap-3 mb-6">
						<PanelButton label="Pending" count="12" isActive />
						<PanelButton label="Accepted" count="33" />
						<PanelButton label="Shipped" count="121" />
					</div>
					<div className="gap-6 flex flex-wrap">
						<OrderInfoBox
							orderId="281217"
							date={'Today, 11:11 PM'}
							quantity="1"
							isNew
						/>
						<OrderInfoBox
							orderId="281217"
							date={'Today, 11:11 PM'}
							quantity="1"
							isNew
						/>
						<OrderInfoBox
							orderId="281217"
							date={'Today, 11:11 PM'}
							quantity="1"
							isNew
						/>
						<OrderInfoBox
							orderId="281217"
							date={'Today, 11:11 PM'}
							quantity="1"
							isNew
						/>
						<OrderInfoBox
							orderId="281217"
							date={'Today, 11:11 PM'}
							quantity="1"
						/>
						<OrderInfoBox
							orderId="281217"
							date={'Today, 11:11 PM'}
							quantity="1"
						/>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
