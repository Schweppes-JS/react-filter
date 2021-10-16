import React, { useState } from 'react';
import PopupTable from '../PopupTable/PopupTable';

import './AccordionOption.css';

const AccordionOption = ({name, suboptions, appliedSuboptions, dispatchSuboption}) => {
    const [isOpened, setOpenStatus] = useState(false)

    return (
        <li className='accordion-option'>
            <p className='accordion-option__title' onClick={() => setOpenStatus(!isOpened)}>
                <span>{name}</span>
                <span className="accordion-option__symbol">+</span>
            </p>
				<PopupTable
					optionName={name}
					isShowed={isOpened}
					suboptions={suboptions}
					dispatchSuboption={dispatchSuboption}
					appliedSuboptions={appliedSuboptions}
				/>
        </li >
    )
}

export default AccordionOption
