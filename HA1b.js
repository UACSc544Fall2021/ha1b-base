let ha1b = {
    svgNS: 'http://www.w3.org/2000/svg',
};

window.addEventListener('load', function () {

    // From HA1A
    d0 = drawBarChart('barchart', grade_percents);
    
    // Sales across regions
    d1 = drawScatter('scatter0', games, 'NA_Sales', 'EU_Sales', 'Other_Sales')
    
    // Critic interest & North American sales
    d2 = drawScatter('scatter1', games, 'Critic_Score', 'Critic_Count', 'NA_Sales')

    // Comparing users and critics reactions and relation to sales
    d3 = drawScatter('scatter2', games, 'User_Score', 'Critic_Score', 'Global_Sales')

});


// element - the svg element name
// data - the data used
let drawBarChart = function(element, data) {

// Your Code Here

};


// element - the svg element name
// data - the data used
// xprop - property to map to horizontal axis
// yprop - property to map to vertical axis
// clrprop - property to map to color
let drawScatter = function(element, data, xprop, yprop, clrprop) {

// Your Code Here

};

