import React, {memo} from 'react';
import clsx from "clsx";

function MenuItem({children, to, label, active = false}) {
    const classes = clsx([active && "bg-opacity-10 bg-white", "mb-2 py-3  pl-6 hover:bg-opacity-10 hover:bg-white cursor-pointer"]);
	return (
		<li className={classes}>
			<a href={to}>
				{children}
				<span className="font-galanogrotesque text-base font-regular text-white">
					{label}
				</span>
			</a>
		</li>
	);
}

export default memo(MenuItem);
