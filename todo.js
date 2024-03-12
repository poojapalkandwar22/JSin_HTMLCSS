
document.addEventListener('DOMContentLoaded', function()  // After loading all html totally
 {
  fetch('https://restcountries.com/v3.1/all')  //We can fetch data from the the "fetch()" function 
  .then(response => response.json())  // converting the response from the fetch request to JSON format using the .json() method.
  .then(data => {
      const countryList = document.getElementById('country-list');
      // const officialName = document.getElementById('official-list')
      data.forEach(country => 
      {
          const li = document.createElement('li');
          li.textContent = country.name.common;
          countryList.appendChild(li);
          const officialName = document.createElement('div');
          officialName.textContent = country.name.official;
          li.appendChild(officialName);
          const domain = document.createElement('div');
          domain.textContent = country.tld.join(", ")
          li.appendChild(domain);

          
      });
  })
  .catch(error => {
      console.error('Error fetching data:', error);
  });
});
