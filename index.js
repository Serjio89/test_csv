import _ from 'lodash';

export default function solution(content){
  // BEGIN
  const data = content.split('\r\n').slice(1)
  const rowsData = data.map(el=>el.split(','))
  
  const passengersQty = data.length - 1
  console.log(`Общее количество пассажиров: ${passengersQty}`);

  const tr = data.map(el=>el.trim().split(',').flat())
  const embarkedList = tr.map(el=>el[12])
  console.log(embarkedList);

  const sexList = rowsData.map(el=>el[5])
  const maleQty = sexList.filter(el=>el === 'male').length
  const femaleQty = sexList.filter(el=>el === 'female').length
  console.log(`Соотношение количества мужчин и женщин: ${maleQty} к ${femaleQty}`)
  
  const survived = rowsData.map(el=>el[1])
  const survivedCount = survived.filter(el=>el==='1').length
  const survivedPercent = (survivedCount / passengersQty) * 100
  console.log(`Выжило ${Math.ceil(survivedPercent)}%`);


  const namesList = rowsData.map(el=>el[3])
  console.log(namesList);
  // END
}


