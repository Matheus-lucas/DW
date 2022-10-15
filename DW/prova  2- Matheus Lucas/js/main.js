const bottomStats = document.querySelector('.cards')
const table1Stats = document.querySelector("#table1")
const table2Stats = document.querySelector("#table2")


fetch('data/cards.json')
    .then(res => res.json())
    .then(json => loadBottomStats(json))

fetch('data/shared-networks.json')
    .then(res => res.json())
    .then(json => loadtable1Stats(json))

fetch('data/subnets.json')
    .then(res => res.json())
    .then(json => loadtable2Stats(json))


function loadBottomStats(stats) {
    for (const data of stats) {
        const logo = data.icon
        const info = data.bg
        const subinfo = data.name
        const color = data.value
        const view = `<div class="col">
      <div class="card d-flex flex-row shadow-sm">
        <div class="prepend-icon ${info} text-white p-3 d-flex align-items-center">
          <span data-feather=${logo}></span>
        </div>
        <div class="p-2">
          <p class="m-0">${subinfo}</p>
          <h4 class="m-0">${color}</h2>
        </div>
      </div>
    </div>`
        bottomStats.insertAdjacentHTML('beforeend', view)
        feather.replace()
    }

}


function loadtable1Stats(stats) {
    for (const data of stats) {
        const location = data.location
        const used = data.used
        const size = data.size
        const free = data.free
        const utilization = data.utilization
        const view = `<tr>
      <td>${location}</td>
      <td>${used}</td>
      <td>${size}</td>
      <td>${free}</td>
      <td class="align-middle">
        <div class="progress" style="height: .6rem;">
          <div class="progress-bar bg-success" role="progressbar" style="width:${utilization}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </td>
    </tr>`
        table1Stats.insertAdjacentHTML('beforeend', view)
    }
}

function loadtable2Stats(stats) {
    for (const data of stats) {
        const location = data.subnet
        const range = data.range
        const used = data.used
        const size = data.size
        const free = data.free
        const utilization = data.utilization
        const view = `<tr>
        <td>${location}</td>
        <td>${range}</td>
         <td>${used}</td>
                        <td>${size}</td>
                        <td>${free}</td>
                        <td class="align-middle">
                          <div class="progress" style="height: .6rem;">
                            <div class="progress-bar bg-success" role="progressbar" style="width: ${utilization}%" aria-valuenow="25" aria-valuemin="0"
                              aria-valuemax="100"></div>
                          </div>
                        </td>
                      </tr>`
    table2Stats.insertAdjacentHTML('beforeend', view)  
    }
  }