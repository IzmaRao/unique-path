Project Overview
This project aims to create a dynamic resume builder using HTML, CSS, and TypeScript. The goal is to provide a user-friendly interface where individuals can input their personal and professional information, and the application will generate a customized resume in a visually appealing format.

Technologies Used
HTML: The foundation for structuring the user interface and content.
CSS: Used for styling the elements, creating a visually appealing layout, and ensuring cross-browser compatibility.
TypeScript: A superset of JavaScript that adds optional static typing for improved code quality and maintainability.
Project Structure
project-directory
├── main.html
├── main.css
├── main.ts
├── main.js
└── README.md
Features
User-Friendly Interface: A simple and intuitive interface for users to enter their information.
Dynamic Generation: Generate a resume in real-time based on the user's input.





    <h2 style="color: #333; font-weight: bold; margin-bottom: 10px;">Generated Resume</h2>
    <div style="text-align: center; margin-top: 20px;">
      <img src=${imageDataUrl} style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover;" />
    </div>
    <div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
      <div style="flex-basis: 40%; margin: 10px;">
        <p><strong style="color: #666;">Name</strong> <span id='edit-name' class='editable'>   : ${name} </span> </p>
        <p><strong style="color: #666;">Email</strong> <span id='edit-email' class='editable'>  : ${email} </span> </p>
        <p><strong style="color: #666;">Phone</strong> <span id='edit-phone' class='editable'>  : ${phone} </span> </p>
      </div>
      <div style="flex-basis: 40%; margin: 10px;">
        <p id='edit-education' class='editable'><strong style="color: #666;">Education</strong> : ${education}</p>
        <p id='edit-skills' class='editable'><strong style="color: #666;">Skills</strong> : ${Skill}</p>
        <p id='edit-experience' class='editable'><strong style="color: #666;">Experience</strong> : ${experience}</p>
      </div>
    </div>
















document.getElementById("resumeform")?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Type assertions
  const NameElement = document.getElementById("Name") as HTMLInputElement;
  const OccupationElement = document.getElementById("Occupation") as HTMLInputElement;
  const EmailElement = document.getElementById("Email") as HTMLInputElement;
  const PhoneElement = document.getElementById("Phone") as HTMLInputElement;
  const AddressElement = document.getElementById("Address") as HTMLInputElement;
  const DegreeElement = document.getElementById("Degree") as HTMLInputElement;
  const EducationStartElement = document.getElementById("EducationStart") as HTMLInputElement;
  const EducationEndElement = document.getElementById("EducationEnd") as HTMLInputElement;
  const UniversityNameElement = document.getElementById("UniversityName") as HTMLInputElement;
  const AchievementsElement = document.getElementById("Achievements") as HTMLTextAreaElement;
  const ExperienceElement = document.getElementById("Experience") as HTMLTextAreaElement;
  const CompanyNameElement = document.getElementById("CompanyName") as HTMLInputElement;
  const CompanyDetailsElement = document.getElementById("CompanyDetails") as HTMLTextAreaElement;
  const JobStartElement = document.getElementById("JobStart") as HTMLInputElement;
  const JobEndElement = document.getElementById("JobEnd") as HTMLInputElement;
  const SkillElement = document.getElementById("Skills") as HTMLTextAreaElement;
  const UploadimgElement = document.getElementById("Uploadimg") as HTMLInputElement;

  if (
      NameElement && OccupationElement && EmailElement && PhoneElement && AddressElement &&
      DegreeElement && EducationStartElement && EducationEndElement && UniversityNameElement &&
      AchievementsElement && ExperienceElement && CompanyNameElement && CompanyDetailsElement &&
      JobStartElement && JobEndElement && SkillElement && UploadimgElement
  ) {
      const name = NameElement.value;
      const occupation = OccupationElement.value;
      const email = EmailElement.value;
      const phone = PhoneElement.value;
      const address = AddressElement.value;
      const degree = DegreeElement.value;
      const educationStart = EducationStartElement.value;
      const educationEnd = EducationEndElement.value;
      const universityName = UniversityNameElement.value;
      const achievements = AchievementsElement.value;
      const experience = ExperienceElement.value;
      const companyName = CompanyNameElement.value;
      const companyDetails = CompanyDetailsElement.value;
      const jobStart = JobStartElement.value;
      const jobEnd = JobEndElement.value;
      const skills = SkillElement.value;

      const file = UploadimgElement.files![0];
      const reader = new FileReader();
      reader.onload = () => {
          const imageDataUrl = reader.result as string;
          const resumeOutput = `
              <div class="all-div">
                  <div class="res-one-div">
                      <div>
                          <img height="160" width="160" src="${imageDataUrl}" alt="Uploaded Image" />
                      </div>
                      <div class="name-occupation-div">
                          <h2 class="name">${name}</h2>
                          <div class="hr-div"></div>
                          <h3 class="occupation">${occupation}</h3>
                      </div>
                  </div>
                  <div class="data-div">
                      <div>
                          <div class="experience-div">Experience</div>
                          <div class="experience-data-div">
                              <div>
                                  <ul class="ul-data">
                                      <li>
                                          <h6>${experience}</h6>
                                          <p>${jobStart} to ${jobEnd}</p>
                                      </li>
                                  </ul>
                              </div>
                              <div class="company-div">
                                  <div>
                                      <h4>${companyName}</h4>
                                      <p>${companyDetails}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div>
                          <div class="experience-div">Education</div>
                          <div class="experience-data-div">
                              <div>
                                  <ul class="ul-data">
                                      <li>
                                          <h6>${degree}</h6>
                                          <p>${educationStart} to ${educationEnd}</p>
                                      </li>
                                  </ul>
                              </div>
                              <div class="company-div">
                                  <div>
                                      <h4>${universityName}</h4>
                                      <p>${achievements}</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="contact-skill-div">
                          <div class="contact-divv">
                              <div class="contact-div">Contact</div>
                              <div class="contact-data">
                                  <p>${address}</p>
                                  <p>${phone}</p>
                                  <p>${email}</p>
                              </div>
                          </div>
                          <div>
                              <div class="skill-div">Skills</div>
                              <div class="skills">
                                  <div>${skills}</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          `;

          const resumeOutputElement = document.getElementById("resumeOutput");
          if (resumeOutputElement) {
              resumeOutputElement.innerHTML = resumeOutput;
          } else {
              console.error("The resume output element is missing");
          }
      };
      reader.readAsDataURL(file);
  } else {
      console.error("One or more input elements are missing");
  }
});


