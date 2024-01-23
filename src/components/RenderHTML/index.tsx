import React, { HTMLProps } from 'react';
import { useAllFormFields, reduceFieldsToValues, getSiblingData } from 'payload/components/forms';

import './index.scss';

const baseClass = 'resume-view';
const descClass = 'desc-small';
const expClass = 'exp-view';

const RenderHTML: React.FC = () => {
    const [allfields, dispatchFields] = useAllFormFields();
    const siblingData = getSiblingData(allfields, 'name');
    var i: number;
    var _this = this;

    return (
        <div className={baseClass}>
            {siblingData.content != '' && <div dangerouslySetInnerHTML={{ __html: siblingData.content }}></div>}
            {/*{siblingData.content as string}*/}
        </div>
    );
};

export default RenderHTML;