import React from 'react'
import { Tooltip } from 'react-tooltip';

const TooltipIcon = ({ IconComponent, tooltipText, id }) => {
    return (
      <>
        <div className="rounded-full border w-8 h-8 flex justify-center items-center cursor-pointer hover:border-[#537CD9]" data-tooltip-id={id} data-tooltip-content={tooltipText}>
          <IconComponent />
        </div>
        <Tooltip id={id} />
      </>
    );
  };

export default TooltipIcon