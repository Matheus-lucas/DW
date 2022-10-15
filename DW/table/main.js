const ips = [
  {
    address: "192.168.0.2",
    mask: "255.255.255.0"
  },
  {
    address: "192.168.0.10",
    mask: "255.255.255.0"
  },
  {
    address: "192.168.0.26",
    mask: "255.255.255.0"
  },
  {
    address: "192.168.0.30",
    mask: "255.255.255.0"
  }
]
const ipsContainer = document.querySelector('.ips tbody')

ipsContainer.innerHTML = ips

  for(let x of ips){
  ips.insertAdjacentHTML('beforeend',<li>Text ${x}</li>)
   }