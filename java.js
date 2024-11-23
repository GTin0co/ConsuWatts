const ctx = document.getElementById('myChart');
const consumoSemanal = [3, 2, 4, 5, 2, 8, 9];

const tarifaEnergia = 0.835;
const totalKWh = consumoSemanal.reduce((total, valor) => total + valor, 0);
const totalReais = (totalKWh * tarifaEnergia).toFixed(2);
document.getElementById("totalReais").innerText = ('R$') + totalReais;

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    datasets: [{
      label: 'Consumo kWh',
      data: [3, 2, 4, 5, 2, 8, 9],
      borderWidth: 5
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          maxTicksLimit: 6,  // Limitar o número máximo de rótulos no eixo Y
          callback: function(value) {
            return value + ' kWh';  // Adiciona 'kWh' aos valores
          },
          font: {
            size: 60 // Tamanho da fonte do eixo Y
          }
        },
      },
      x: {
        ticks: {
          font: {
            size: 60 // Tamanho da fonte do eixo X
          }
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          font: {

            size: 90 // Tamanho da fonte da legenda
          
          }
          
        }
      }
    }
  }
});
