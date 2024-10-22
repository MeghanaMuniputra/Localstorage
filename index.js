
let btn = document.getElementById("btn");
let suggestions = document.getElementById("btn-s");
let output = document.getElementById("output");
let filterData = document.getElementById("btn-f");
let filterData0 = document.getElementById("btn-2");
let filterData1 = document.getElementById("btn-3");
let filterData2 = document.getElementById("btn-4");
let filterData3 = document.getElementById("btn-5");

btn.onclick = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    alert("Data Fetched");
    localStorage.setItem("data", JSON.stringify(data));
    displayData(data);
}

filterData.onclick = () => {
    let category = document.getElementById("search").value;
    let data = JSON.parse(localStorage.getItem("data")) || [];
    
    if (data.length > 0) {
        if (category) {
            let filteredData = data.filter(obj => obj["category"] === category); 
                displayData(filteredData);   
        } else {
            output.innerHTML = "Please select a category.";
        }
    } else {
        output.innerHTML = "No Data Available";
    }
};


filterData0.onclick = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        data = data.filter(obj => obj["category"] === "electronics");
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}
filterData1.onclick = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        data = data.filter(obj => obj["category"] === "jewelery");
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}
filterData2.onclick = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        data = data.filter(obj => obj["category"] === "men's clothing");
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}
filterData3.onclick = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        data = data.filter(obj => obj["category"] === "women's clothing");
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}

function displayData(data) {
    output.innerHTML = "";
    data.forEach((obj, index) => {
        let information = document.createElement("div");
        information.className = "cards"
        information.innerHTML =
            `<p><b>Id : </b>${obj["id"]}</p>
            <p><b>Title : </b>${obj["title"]}</p>
            <p><b>Price : </b>${obj["price"]}</p>
            <p><b>Description : </b>${obj["description"]}</p>
            <p><b>Category : </b>${obj["category"]}</p>`;

        let deletebtn = document.createElement("button");
        deletebtn.innerText = "Delete";
        deletebtn.className = "dbtn"

        deletebtn.onclick = () => {
            deleteData(index);
        }

        information.appendChild(deletebtn);
        output.appendChild(information);
    });
}
function deleteData(index) {
    let data = JSON.parse(localStorage.getItem("data"));
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    displayData(data);
}

window.onload = () => {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    if (data.length > 0) {
        displayData(data);
    } else {
        output.innerHTML = "No Data Available";
    }
}