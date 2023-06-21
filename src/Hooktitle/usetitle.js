import React, { useEffect } from 'react';

const usetitle = title => {
    useEffect(() => {
        document.title = `Creative
        Peoples| ${title} `;
    }, [title])
};

export default usetitle;