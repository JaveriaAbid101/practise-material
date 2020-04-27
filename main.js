const employee =
{
 name: 'Javeria',
 job: 'Developer',
 city: 'Rawalpindi satellite town',
 bio: ' recently did Bachelors in computer science and love to do development',
};
const markup = `

<div class = "person">
<h2>
${employee.name}
<span class ="job">${employee.job}</span>
</h2>
<p class ="location">${employee.city}</p>
<p class ="bio">${employee.bio}</p>
</div>
`;
console.log(markup);

