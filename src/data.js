export const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
];

export const Q4_CHART_DATA = {
    "values": {
        "Africa": {
            "domestic_public_expenditures": 13791843.9,
            "domestic_public_subsidies": 10187737.65,
            "domestic_public_revenues": 315333.73
        },
        "Asia": {
            "domestic_public_expenditures": 18968642.93,
            "domestic_public_subsidies": 1223337.52,
            "domestic_public_revenues": 26485819.82
        },
        "Latin America and the Caribbean": {
            "domestic_public_expenditures": 602820274.21,
            "domestic_public_subsidies": 299696740.64,
            "domestic_public_revenues": 996201146.07
        },
        "Northern Mediterranean": {
            "domestic_public_expenditures": 148959715.56,
            "domestic_public_subsidies": 359115850.5,
            "domestic_public_revenues": 202666666.67
        },
        "Central and Eastern Europe": {
            "domestic_public_expenditures": 5745774.04,
            "domestic_public_subsidies": 11733076.26,
            "domestic_public_revenues": 64321647.05
        }
    },
    "max": 996201146.07
}

export const transformData = (data) => {
    const transformedData = [];
    for (const region in data.values) {
        const datum = data.values[region];
        transformedData.push({
            name: region,
            "Domestic Public Expenditures": datum.domestic_public_expenditures,
            "Domestic Public Subsidies": datum.domestic_public_subsidies,
            "Domestic Public Revenues": datum.domestic_public_revenues
        });
    }
    return transformedData;
}