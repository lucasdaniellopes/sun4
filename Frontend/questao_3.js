function q3TratarDatas(data) {
  // Array of month names in Portuguese
  const months = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
  ];

  let dia, mes, ano;

  try {
    let dataParts;
    if (data.includes('/')) {
      dataParts = data.split('/');
    } else if (data.includes('-')) {
      dataParts = data.split('-');
    }

    if (dataParts && dataParts.length === 3) {
      dia = parseInt(dataParts[0]);
      mes = parseInt(dataParts[1]);
      ano = parseInt(dataParts[2]);

      dia = dia.toString().padStart(2, '0');
      mes = mes.toString().padStart(2, '0'); 
      return `${ano}-${mes}-${dia}`;
    }
  } catch (error) {}

  try {
    const dataParts = data.toLowerCase().split(' ').filter(word => word !== 'de');
    if (dataParts.length === 3) {
      dia = parseInt(dataParts[0], 10);
      mes = dataParts[1];
      ano = parseInt(dataParts[2], 10);

      const monthIndex = months.findIndex(month => month.startsWith(mes));

      if (monthIndex !== -1) {
        mes = (monthIndex + 1).toString().padStart(2, '0'); 
        dia = dia.toString().padStart(2, '0'); 
        return `${ano}-${mes}-${dia}`; 
      }
    }
  } catch (error) {}

  return data;
}

const datasParaTratar = [
  '30/11/2022',
  '01 dez 2022',
  '25/12/2022',
  '31 de dezembro de 2022'
];

datasParaTratar.forEach(data => {
  console.log(q3TratarDatas(data));
});
