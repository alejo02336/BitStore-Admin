import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart,
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

Chart.register(BarController, CategoryScale, LinearScale, BarElement);

const SalesChart = ({ topSellingProducts }) => {
  // Obtén los datos necesarios para el gráfico
  const MAX_LENGTH = 7; // Longitud máxima del texto corto

  const labels = topSellingProducts.map((product) => {
    if (product.title.length > MAX_LENGTH) {
      return product.title.substring(0, MAX_LENGTH) + "..."; // Agrega "..." al final del texto corto si se corta
    } else {
      return product.title; // Devuelve el título sin cortar
    }
  });
  const data = topSellingProducts.map((product) => product.quantity);

  // Configuración del gráfico

  // Datos y opciones del gráfico
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Ventas",
        data: data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true, // Hacer el gráfico responsivo al tamaño del contenedor
    maintainAspectRatio: false, // No mantener la relación de aspecto
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ width: "90%", height: "250px" }}>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default SalesChart;
