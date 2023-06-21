import React from 'react';

const Sectiontile = ({sectoinHeading, sectionTitle, sectionDescreption}) => {
    return (
        <div>
            <div >
                <div class="flex items-center w-32 ">
                    <hr class="flex-grow border-t-2 border-[#EB5757]" />
                    <span class=" px-2 text-[#EB5757]">{sectoinHeading}</span>

                </div>
            </div>

            <h1 className=' text-[#0F0F0F] font-bold text-5xl'>{sectionTitle}</h1>
            <p>{sectionDescreption}</p>
        </div>
    );
};

export default Sectiontile;