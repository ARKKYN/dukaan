import clsx from 'clsx';
import React, {memo} from 'react';

function PanelButton({label, count, isActive}) {
	const classes = clsx([
		isActive ? 'bg-darkBlue text-white ' : 'bg-grey-200 text-grey-100',
		'inline-block ',
	]);

	return (
		<button
			className={classes}
			style={{padding: '6px 20px', borderRadius: '40px'}}
		>{`${label} (${count})`}</button>
	);
}

export default memo(PanelButton);
