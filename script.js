async function getJobs() {
  const response = await fetch("http://localhost:5500/api/jobs");
  const json = await response.json();
  console.log(json);
  const jobs = json
  console.log(jobs)


  const jobsHTML = jobs.map(renderJobs);
document.getElementById("jobList").innerHTML = jobsHTML.join("");
}

getJobs();

function renderJobs(job) {

  return `
 
   <div class="col">
  <div class="card h-100">
    <img src="https://itviec.com/itviec-black-square-facebook.png" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">${job.title}</h5>
      <b>Up to $${job.salaryHigh}</b>
      <h6>Company: ${job.companyName}</h6>
      <h6>City: ${job.city}</h6>
      
    </div>
    <div class="button" style="margin-left:auto; margin-right:auto">
      <button type="button" style="border-radius:5px; background-color:blue; color:white"> Apply Now </button>
      <button type="button" onclick="getIDJob('${job.id}')"> See more </button>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated ${moment(job.postedDate).fromNow()}</small>
    </div>
  </div>
</div>

`;
}

 function getIDJob(id){
  console.log(id)
}


const form = document.getElementById('jobCreate')


form.addEventListener('submit',(e) => {
  console.log({e});
  e.preventDefault()

  const title = document.getElementById("titleCreate").value;
  const city = document.getElementById("cityCreate").value;
  
  console.log({title,city});
  createJob({title,city});
})


async function createJob(j){
  const resp = await fetch("http://localhost:5500/api/jobs", {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(j) // body data type must match "Content-Type" header
  });
  // return resp.json(); // parses JSON response into native JavaScript objects
  
  const json = await resp.json()
  console.log({json})
}