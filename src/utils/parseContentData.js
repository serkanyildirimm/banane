import React from "react";
const parseContentData = (data) => {
    if (data == null) {
        return;
    }
    return Object.keys(data).map(key => {
        return {
            id: key,
            ...data[key],
        };
    }).sort(function (a, b) {
        return (a.date > b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
    });
};
export default parseContentData;