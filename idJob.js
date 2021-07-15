// async function getJob() {
//     const response = await fetch("http://localhost:5500/api/jobs");
//     const json = await response.json();
//     const 
//     console.log(json);
//     const jobs = json
//     console.log(jobs)
  
  
//     const jobHTML = jobs.map(getIDJob(idValue));
//   document.getElementById("job").innerHTML = jobHTML.join("");
//   }







// document.getElementById('seeMore').addEventListener("click", function getIDJob(id){
//     const idJob = jobs.filter((j) => j.id == id)
//     return `
//     <dl class="row">
//     <dt class="col-sm-3">Title</dt>
//     <dd class="col-sm-9">${idJob.title}</dd>
  
//     <dt class="col-sm-3">Company Name</dt>
//     <dd class="col-sm-9">
//       <p>${idJob.companyName}</p>
//     </dd>
  
//     <dt class="col-sm-3">City</dt>
//     <dd class="col-sm-9">${idJob.city}</dd>
  
//     <dt class="col-sm-3 text-truncate">Salary range</dt>
//     <dd class="col-sm-9">$${idJob.salaryLow} - $${idJob.salaryHigh}</dd>
  
//     <dt class="col-sm-3">Experience</dt>
//     <dd class="col-sm-9">${idJob.yrsXPExpected} year(s)</dd>
  
//     <dt class="col-sm-3">Description</dt>
//     <dd class="col-sm-9">A description list is perfect for defining terms. Definition for the term. And some more placeholder definition text. This definition is short, so no extra paragraphs or anything.</dd>
  
//     <dt class="col-sm-3">Updated</dt>
//     <dd class="col-sm-9">${idJob.postedDate.split("T")[0]}</dd>
   
//       </dl>
//     </dd>
//   </dl>
//     `
//   }
// )