const data = [
"como organizar o caderno",
"como ir bem no vestibular",
  "como ir bem no enem",
  "como ir bem no concurso",
  "sites para estudar",
  "canais no youtube",
  "aplicativos para estudar",
  "como estudar",
  "metodos de estudo",
  "cursos gratuitos",

];

function search(){
const inpt = 
  document.getElementByld("searchInput").value.toLowerCase();
  const result = 
    document.getElementByld("Results");

  //Limpar resultados anteriores
  result.innerHTML = ";

  const filteredData =
    data.filter(item => item.toLowerCase().includes(input));

  if (filteredData.length === 0) {
result.innerHTML ='<li> Nenhum resultado encontrado.</li>';
  return 
  }
filteredData.forEach(item =>{
  const li = 
    document.createElement("li");
  li.textContent = item;
  result.appendChild(li);
});
  
}

