// ================= MEMORY CONFIG =================

let memory = [
  {size:120, free:true, process:null},
  {size:350, free:true, process:null},
  {size:80, free:true, process:null},
  {size:600, free:true, process:null},
  {size:200, free:true, process:null},
  {size:150, free:true, process:null},
  {size:90, free:true, process:null},
  {size:400, free:true, process:null},
  {size:300, free:true, process:null},
  {size:180, free:true, process:null}
];

let processCounter = 1;
let totalProcesses = 0;
let failedAllocations = 0;

// ================= PAGING CONFIG =================

const PAGE_SIZE = 100;
const TOTAL_MEMORY = 2000;
const TOTAL_PAGES = TOTAL_MEMORY / PAGE_SIZE;
let pages = new Array(TOTAL_PAGES).fill(null);

// ================= RENDER =================

function render() {
  const view = document.getElementById("memoryView");
  view.innerHTML = "";

  memory.forEach(block => {
    let div = document.createElement("div");
    div.className = "memory-block " + (block.free ? "free" : "allocated");

    if(block.free){
      div.innerText = "Free Block: " + block.size;
    } else {
      div.innerText = "P" + block.process.id +
        " | Size: " + block.size +
        " | Time Left: " + block.process.remainingTime;
    }

    view.appendChild(div);
  });

  updateGraph();
}
// ================= ALLOCATION =================

function allocate(){

  let size = parseInt(document.getElementById("processSize").value);
  let time = parseInt(document.getElementById("processTime").value);
  let algo = document.getElementById("algorithm").value;

  if(isNaN(size) || isNaN(time)){
    alert("Enter valid process size and execution time");
    return;
  }

  // ===== AUTO ADAPTIVE SELECTOR =====
  if(algo === "auto"){

    if(size < 100){
      algo = "first";
    }
    else if(size <= 300){
      algo = "best";
    }
    else{
      algo = "worst";
    }

    console.log("Adaptive Selected:", algo);
  }

  let index = -1;

  // ===== FIRST FIT =====
  if(algo === "first"){
    for(let i=0;i<memory.length;i++){
      if(memory[i].free && memory[i].size >= size){
        index = i;
        break;
      }
    }
  }

  // ===== BEST FIT =====
  if(algo === "best"){
    let best = Infinity;
    for(let i=0;i<memory.length;i++){
      if(memory[i].free && memory[i].size >= size && memory[i].size < best){
        best = memory[i].size;
        index = i;
      }
    }
  }

  // ===== WORST FIT =====
  if(algo === "worst"){
    let worst = -1;
    for(let i=0;i<memory.length;i++){
      if(memory[i].free && memory[i].size >= size && memory[i].size > worst){
        worst = memory[i].size;
        index = i;
      }
    }
  }

  if(index === -1){
    failedAllocations++;
    alert("Not enough contiguous memory!");
    return;
  }

  let remaining = memory[index].size - size;

  memory[index] = {
    size: size,
    free:false,
    process:{
      id:processCounter,
      remainingTime:time
    }
  };

  if(remaining > 0){
    memory.splice(index+1,0,{
      size:remaining,
      free:true,
      process:null
    });
  }

  startTimer(index);
  processCounter++;
  totalProcesses++;

  render();
}


// ================= TIMER =================

function startTimer(index){

  let interval = setInterval(()=>{

    if(memory[index] && memory[index].process){
      memory[index].process.remainingTime--;

      if(memory[index].process.remainingTime <= 0){
        memory[index].free = true;
        memory[index].process = null;
        clearInterval(interval);
        render();
      }

      render();
    }

  },1000);
}

// ================= FRAGMENTATION =================

function calculateExternalFragmentation(){

  let totalFree = 0;
  let largestFree = 0;

  memory.forEach(block=>{
    if(block.free){
      totalFree += block.size;
      if(block.size > largestFree)
        largestFree = block.size;
    }
  });

  return totalFree - largestFree;
}

// ================= GRAPH =================

const ctx = document.getElementById("fragmentChart");

const chart = new Chart(ctx,{
  type:"line",
  data:{
    labels:[],
    datasets:[{
      label:"External Fragmentation",
      data:[],
      borderWidth:2
    }]
  }
});

function updateGraph(){
  chart.data.labels.push(new Date().toLocaleTimeString());
  chart.data.datasets[0].data.push(calculateExternalFragmentation());
  chart.update();
}

// ================= COMPACTION =================

function compaction(){

  let newMemory = [];
  let totalFree = 0;

  memory.forEach(block=>{
    if(block.free){
      totalFree += block.size;
    } else {
      newMemory.push(block);
    }
  });

  if(totalFree > 0){
    newMemory.push({
      size: totalFree,
      free:true,
      process:null
    });
  }

  memory = newMemory;
  render();
}

// ================= PAGING =================

function allocatePaging(){

  let size = parseInt(document.getElementById("processSize").value);
  let pagesNeeded = Math.ceil(size / PAGE_SIZE);

  let freePages = [];

  pages.forEach((p,i)=>{
    if(p === null) freePages.push(i);
  });

  if(freePages.length >= pagesNeeded){

    for(let i=0;i<pagesNeeded;i++){
      pages[freePages[i]] = "P"+processCounter;
    }

    let internalFrag = (pagesNeeded * PAGE_SIZE) - size;

    alert("Allocated using Paging\nInternal Fragmentation: "+internalFrag);

    processCounter++;

  } else {
    alert("Not enough pages available");
  }
}
// ================= SAVE REPORT =================

async function saveReport(){

  const reportData = {
    totalProcesses: totalProcesses,
    failedAllocations: failedAllocations,
    externalFragmentation: calculateExternalFragmentation(),
    memorySnapshot: memory,
    timestamp: new Date()
  };

  try{

    const response = await fetch("http://localhost:5000/api/simulations/save-report",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(reportData)
    });

    const data = await response.json();

    alert("Report Saved Successfully ✅");

  }catch(error){
    alert("Error saving report ❌");
    console.log(error);
  }
}