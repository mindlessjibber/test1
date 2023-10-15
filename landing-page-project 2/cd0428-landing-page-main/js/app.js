document.addEventListener('DOMContentLoaded', function() {
    /**
     * 
     * Manipulating the DOM exercise.
     * Exercise programmatically builds navigation,
     * scrolls to anchors from navigation,
     * and highlights section in viewport upon scrolling.
     * 
     * Dependencies: None
     * 
     * JS Version: ES2015/ES6
     * 
     * JS Standard: ESlint
     * 
    */
    
    /**
     * Comments should be present at the beginning of each procedure and class.
     * Great to have comments before crucial code sections within the procedure.
    */
    
    /**
     * Define Global Variables
     * 
    */
    let nav_ul = document.getElementById("navbar__list");
    
    let nav_sections = document.getElementsByTagName("section");
    //console.log(nav_sections);
    
    for (section of nav_sections){
        let li = document.createElement("li");
        let anchor = document.createElement("a");
        const sectionId = section.getAttribute("id");
        //console.log(sectionId)
        //anchor.setAttribute("onclick", `scrollToSection('${section.getAttribute("id")}')`);
        //anchor.href = "#"+section.getAttribute("id");
        anchor.href = "#";
        anchor.innerText = section.getAttribute("data-nav");
        anchor.addEventListener("click", function(event){
            event.preventDefault();
            
            const targetSection = document.getElementById(sectionId);
            //console.log(targetSection)
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
        //console.log(anchor);
        li.appendChild(anchor);
        nav_ul.appendChild(li);
        //console.log(section.getAttribute("id"));
    }
    
    
    /**
     * End Global Variables
     * Start Helper Functions
     * 
    */
    function scrollToSection(sectionId) {
        var section = document.getElementById(sectionId);
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
    
    // Get all sections on the page
    const sections = document.querySelectorAll('section');
    
    //console.log(sections);
    // Function to highlight the currently viewed section
    function highlightCurrentSection() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            //console.log(section);
            
            // Check if the section is in the viewport
            //let condition = (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
            //if (rect.top >= 0 && rect.top < window.innerHeight) {
            if (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                //console.log("If: top", rect.top, "bottom", rect.bottom, "height", window.innerHeight, "ScrollY", window.scrollY, "OffsetTop", section.offsetTop);
                section.classList.add('highlighted-section');
                highlightMenuItem(section.getAttribute("data-nav"));
                //console.log(section)
            } else {
                //console.log("else: top", rect.top, "bottom", rect.bottom, "height", window.innerHeight, "ScrollY", window.scrollY, "OffsetTop", section.offsetTop);
                section.classList.remove('highlighted-section');
                //console.log(false)
            }
    
            
            //console.log(section.getAttribute("data-nav"));
        });
    
    }
    
    // Attach the function to the scroll event
    window.addEventListener('scroll', highlightCurrentSection);
    // Call the function on page load (in case the page is already scrolled)
    highlightCurrentSection();
    
    
    
    
    function highlightMenuItem(linkText) {
        const linkItems = nav_ul.childNodes; 
        //console.log (linkItems);
        linkItems.forEach(li => {
            if (li.outerText === linkText){
                li.classList.add('active');
            }
            else {
                li.classList.remove('active')
            }
        })
    }
    
    /**
     * End Helper Functions
     * Begin Main Functions
     * 
    */
    
    // build the nav
    
    
    // Add class 'active' to section when near top of viewport
    
    
    // Scroll to anchor ID using scrollTO event
    
    
    /**
     * End Main Functions
     * Begin Events
     * 
    */
    
    // Build menu 
    
    // Scroll to section on link click
    
    // Set sections as active
    
    
    });