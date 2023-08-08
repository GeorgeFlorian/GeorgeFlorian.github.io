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
            "legend_1": 13791843.9,
            "legend_2": 10187737.65,
            "Legend_3": 315333.73
        },
        "Asia": {
            "legend_1": 18968642.93,
            "legend_2": 1223337.52,
            "Legend_3": 26485819.82
        },
        "Latin America and the Caribbean": {
            "legend_1": 602820274.21,
            "legend_2": 299696740.64,
            "Legend_3": 996201146.07
        },
        "Northern Mediterranean": {
            "legend_1": 148959715.56,
            "legend_2": 359115850.5,
            "Legend_3": 202666666.67
        },
        "Central and Eastern Europe": {
            "legend_1": 5745774.04,
            "legend_2": 11733076.26,
            "Legend_3": 64321647.05
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
            "Some Legend Name 1": datum.legend_1,
            "Some Legend Name 2": datum.legend_2,
            "Some Legend Name 3": datum.Legend_3
        });
    }
    return transformedData;
}