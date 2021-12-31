const shorten=document.querySelector("#shorten")
const link=document.querySelector("#link")
let url
shorten.addEventListener("click",shortenURL)

function shortenURL(){
    url=document.querySelector("#url").value
let body= {
    url: `${url}`,
domain: `tiny.one`
}

fetch(`https://api.tinyurl.com/create`, {
    method: `POST`,
    headers: {
      accept: `application/json`,
      authorization: `Bearer Us82z6SGGKvLuK2vAdWaIvLmSOpk22UJoj1PdDYSjGjgN6mnDjo88tkBedy4 `,
      'content-type': `application/json`,
    },
    body: JSON.stringify(body)
})
.then(response => {
    if (response.status != 200) throw `There was a problem with the fetch operation. Status Code: ${response.status}`;
    return response.json()
  })
  .then(data => {
    link.textContent=data.data.tiny_url
  })
  .catch(error =>
    { console.log(error)
    link.textContent="Invalid URL"});
    }