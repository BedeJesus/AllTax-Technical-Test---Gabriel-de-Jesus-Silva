import { Chartt as Chart } from "./styles"

interface Props {
    january: number
    february: number
    march: number
    april: number
}

export default function Grafic(props: Props) {

    const options = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            }
        },
        xaxis: {
            categories: ['January', 'February', 'March', 'April'],
            title: {
                text: 'Vendas',
                style: {
                    fontSize: "15px"
                  }
            },
        },
        yaxis: {
            title: {
                text: 'Quantidade',
                style: {
                    fontSize: "15px"
                  }
            },
            min: 0,
            max: 600
        },
        title: {
            text: 'Sales By Month for:',
            align: "center",
            
        },
        dataLabels: {
            enabled: true,

        },
    }

    const series = [
        {
            name: "Vendas",
            data: [props.january, props.february, props.march, props.april],
        }
    ]

    return (

        <Chart
            options={options}
            series={series}
            type="line"
            height={500}

        />

    )
}