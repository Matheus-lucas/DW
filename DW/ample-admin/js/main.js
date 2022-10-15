
const data = [0, 4, 5, 6, 8, 5]
$('.chart01').sparkline(data, { type: 'bar', barColor: '#7ace4c', barSpacing: 5 })
$('.chart02').sparkline(data, { type: 'bar', barColor: '#707cd2', barSpacing: 5 })
$('.chart03').sparkline(data, { type: 'bar', barColor: '#41b3f9', barSpacing: 5 })
$('.chart04').sparkline(data, { type: 'bar', barColor: '#f33155', barSpacing: 5 })

let ctx = document.querySelector("#lineGraph").getContext('2d')

dados = {
    labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015'],
    datasets: [
        {
            backgroundColor: 'rgba(65, 179, 249, 0.1)',
            borderColor: '#41b3f9',
            data: [2, 5, 2, 6, 2, 5, 2, 4],
        },
        {
            backgroundColor: 'rgba(65, 179, 249, 0)',
            borderColor: '#4c5667',
            data: [5, 2, 7, 4, 5, 3, 5, 4]
        }
    ]
}

opcoes = {
    maintainAspectRatio: false,
    legend: [
        {
            display: true
        }
    ]}

let lineChart = new Chart(ctx, {
    type: 'line',
    data: dados,
    options: opcoes
})