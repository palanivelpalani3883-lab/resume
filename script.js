function checkResume(){

let name=document.getElementById("name").value;

let cgpa=parseFloat(document.getElementById("cgpa").value);

let exp=parseInt(document.getElementById("experience").value)||0;

let skills=document.getElementById("skills").value.toLowerCase();

let required=[

"python",
"java",
"c",
"c++",
"javascript",
"html",
"css",
"sql",
"mysql",
"mongodb",
"react",
"nodejs",
"php",
"django",
"flask",
"machine learning",
"deep learning",
"artificial intelligence",
"data science",
"tensorflow",
"pandas",
"numpy",
"git",
"github",
"linux"

];

let matched=0;

let missing=[];

required.forEach(skill=>{

if(skills.includes(skill)){

matched++;

}

else{

missing.push(skill);

}

});


// Any 5 skills = 100%

let skillScore=0;

if(matched>=5){

skillScore=100;

}

else{

skillScore=(matched/5)*100;

}


// CGPA Score

let cgpaScore=(cgpa/10)*100;


// Experience Score

let expScore=0;

if(exp>=5){

expScore=100;

}

else{

expScore=(exp/5)*100;

}


// Final Score

let finalScore=(skillScore*0.6)+(cgpaScore*0.3)+(expScore*0.1);

let status="";

if(finalScore>=80){

status="⭐ Highly Eligible";

}

else if(finalScore>=60){

status="✅ Eligible";

}

else{

status="❌ Not Eligible";

}

document.getElementById("result").innerHTML=`

<h2>Resume Screening Result</h2>

<p><b>Name :</b> ${name}</p>

<p><b>Matched Skills :</b> ${matched}</p>

<p><b>Skill Score :</b> ${skillScore.toFixed(1)}%</p>

<p><b>CGPA Score :</b> ${cgpaScore.toFixed(1)}%</p>

<p><b>Experience Score :</b> ${expScore.toFixed(1)}%</p>

<p><b>Final Score :</b> ${finalScore.toFixed(1)}%</p>

<p><b>Status :</b> ${status}</p>

<p><b>Missing Skills :</b> ${missing.join(", ")}</p>

`;

}