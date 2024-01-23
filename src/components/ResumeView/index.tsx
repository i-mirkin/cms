import React, { HTMLProps } from 'react';
import { useAllFormFields, reduceFieldsToValues, getSiblingData } from 'payload/components/forms';

import './index.scss';

const baseClass = 'resume-view';
const descClass = 'desc-small';
const expClass = 'exp-view';

const ResumeView: React.FC = () => {
    const [allfields, dispatchFields] = useAllFormFields();
    const siblingData = getSiblingData(allfields, 'name');
    var i: number;
    var _this = this;

    return (
        <div className={baseClass}>
            <h2>{siblingData.name as string}</h2>
            <p>{siblingData.gender as string}</p>
            <p><span className={descClass}>Контакты:</span><br />
                {siblingData.phone as string}<br />
                {siblingData.email as string}</p>
            {siblingData.site != '' && <p><span className={descClass}>Личный сайт:</span><br />{siblingData.site as string}</p>}
            {siblingData.location != '' && <p><span className={descClass}>Место жительства:</span><br />{siblingData.location as string}</p>}
            <h4>{siblingData.position as string}</h4>
            {siblingData.description != '' && <div className='bloko-columns-row' dangerouslySetInnerHTML={{ __html: siblingData.description }}></div>}
            {siblingData.expirience != '' && <div dangerouslySetInnerHTML={{ __html: siblingData.expirience }}></div>}
            {siblingData.skills != '' && <div className='skills' dangerouslySetInnerHTML={{ __html: siblingData.skills }}></div>}
            {siblingData.about != '' && <div className='skills' dangerouslySetInnerHTML={{ __html: siblingData.about }}></div>}

            <p></p>


        </div>
    );
};

export default ResumeView;