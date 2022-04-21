var data = [
  {
    country: "INDIA",
    timeZone: "Asia/Kolkata"
  },
  {
    country: "NEW YORK",
    timeZone: "America/New_York"
  },
  {
    country: "LONDON",
    timeZone: "Europe/London"
  },
  {
    country: "BANGKOK",
    timeZone: "Asia/Bangkok"
  },
  {
    country: "CHINA",
    timeZone: "Asia/Shanghai"
  },
  {
    country: "SYDNEY",
    timeZone: "Australia/Sydney"
  }
];

option = {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour12: false,
  hour: "numeric",
  minute: "2-digit"
};

//DOM
var timeTable = document.querySelector(".timeZone");

function clockMaker() {
  timeTable.innerHTML = "";
  //new Date
  let now = new Date();
  for (let i = 0; i < data.length; i++) {
    option.timeZone = data[i].timeZone;
    let str = now.toLocaleString("en", option);
    let splice = str.split(",");
    let month = splice[0].split(" ")[0];
    let day = splice[0].split(" ")[1];
    let year = splice[1];

    let DMY_combine = day + " " + month + "," + year;
    let time = splice[2];
    let country = data[i].country;

    var tr = document.createElement("tr");
    if ((i == 0) | (i == 2 ) | (i == 4)) {
      tr.setAttribute("class", "bg_dark");
    }
    else {
      tr.setAttribute("class", "bg_light")
    }
    tr.innerHTML = `<td>
                  <h3>${country}</h3><br><p>${DMY_combine}</p>
                  </td>
                  <td><p class="time">${time}</p>
                  `;
    
    timeTable.appendChild(tr);
  }
}
clockMaker();
setInterval(clockMaker, 30000);