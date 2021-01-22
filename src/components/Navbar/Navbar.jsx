import React, {memo} from 'react';

function Navbar() {
	return (
		<div className="bg-white shadow h-20 px-8 py-6 w-full">
			<p className="text-xl font-galanoGrotesque leading-normal font-medium text-dark inline">
				Mano Super Market{' '}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={24}
					height={24}
					fill="none"
                    viewBox="0 0 24 24"
                    className="inline ml-3"
				>
					<path
						fill="#146EB4"
						fillRule="evenodd"
						d="M23.073 12l.747-2.304c.558-1.725-.219-3.6-1.833-4.425L19.831 4.17l-1.102-2.157C17.905.4 16.03-.378 14.305.181L12 .926 9.696.18C7.97-.378 6.096.398 5.27 2.012L4.17 4.17 2.012 5.27C.398 6.096-.378 7.971.18 9.696L.926 12 .18 14.304c-.558 1.724.218 3.6 1.832 4.424L4.17 19.83l1.101 2.156c.825 1.614 2.7 2.392 4.425 1.833L12 23.073l2.304.747c1.724.558 3.6-.219 4.424-1.833l1.102-2.156 2.156-1.102c1.614-.824 2.392-2.7 1.833-4.424L23.073 12zm-13.97 4.448L6.35 13.697c-.468-.468-.468-1.23 0-1.697.468-.468 1.229-.468 1.697 0l1.903 1.903L15.454 8.4c.468-.468 1.229-.468 1.697 0 .468.468.468 1.229 0 1.697l-6.352 6.351c-.468.468-1.229.468-1.697 0z"
						clipRule="evenodd"
					/>
				</svg>
			</p>
            
			<button
							className=" float-right rounded bg-darkBlue bg-opacity-10 text-niceBlue"
							style={{padding: '3px 8px'}}
						>
							How to Use
						
						</button>
		</div>
	);
}

export default memo(Navbar);
