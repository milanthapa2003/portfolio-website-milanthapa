
 // Sample JSON Data
 const skillsData = [
    

    {
        "name": "ReactJS",
        "photo": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },

    {
        "name": "NodeJS",
        "photo": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
 
 
  


    {
        "name": "TailwindCSS",
        "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/48px-Tailwind_CSS_Logo.png"
    },
    {
        "name": "Bootstrap",
        "photo": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
   
    {
        "name": "HTML5",
        "photo": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "photo": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "photo": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
 
   
    {
        "name": "PHP",
        "photo": "https://img.icons8.com/offices/48/000000/php-logo.png"
    },
    {
        "name": "Python",
        "photo": "https://img.icons8.com/color/48/000000/python--v1.png"
    },
    {
        "name": "C++",
        "photo": "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png"
    },
  
    {
        "name": "MySQL",
        "photo": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },

    {
        "name": "AWS",
        "photo": "https://img.icons8.com/color/48/000000/amazon-web-services.png"
    },
   
    {
        "name": "Netlify",
        "photo": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/000000/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
    },
  
 
    {
        "name": "Git VCS",
        "photo": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "photo": "https://img.icons8.com/glyph-neue/49/black/github.png"
    },
    {
        "name": "WordPress",
        "photo": "https://img.icons8.com/color/48/000000/wordpress.png"
    }    
  ];

  // Function to render skills
  function renderSkills(skills) {
    const skillsGrid = document.getElementById('skills-grid');
    skillsGrid.innerHTML = ''; // Clear existing content
    skills.forEach(skill => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';
      skillCard.innerHTML = `
        <img src="${skill.photo}" alt="${skill.name}">
        <h3>${skill.name}</h3>
      `;
      skillsGrid.appendChild(skillCard);
    });
  }

  // Simulate fetching data
  setTimeout(() => {
    renderSkills(skillsData);
  }, 500); // Simulated delay for fetching







    // Access and parse the JSON data
    const jsonData = document.getElementById('json-data').textContent;
    const data = JSON.parse(jsonData);
  
    // Display the JSON data in the HTML
    document.getElementById('output').textContent = JSON.stringify(data, null, 2);