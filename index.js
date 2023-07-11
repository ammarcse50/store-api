const loadDataLimit = async () => {
  const url = `https://fakestoreapi.com/products?limit=10`;

  const res = await fetch(url);

  const data = await res.json();

  displayData(data);
};

let loadBtn = document.getElementById("Load-btn");

const loadData = async () => {
  const url = `https://fakestoreapi.com/products`;

  const res = await fetch(url);

  const data = await res.json();

  displayData(data);
};

const displayData = (details) => {
  console.log(details[0]);

  let tableData = "";

  details.map((value) => {
    tableData += `<tr>
                  
            <td>${value.title}</td>
          
            <td>${value.description}</td>
            <td>${value.category}</td>

            <td>${value.price}</td>
              
             <td><img src="${value.image}"  alt=""></td>

        </tr>
`;
  });

  document.getElementById("table_body").innerHTML = tableData;
};

loadDataLimit();
