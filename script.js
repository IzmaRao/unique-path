var _a;
(_a = document
    .getElementById("resumeform")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertions
    var NameElement = document.getElementById("Name");
    var OccupationElement = document.getElementById("Occupation");
    var EmailElement = document.getElementById("Email");
    var PhoneElement = document.getElementById("Phone");
    var AddressElement = document.getElementById("Address");
    var DegreeElement = document.getElementById("Degree");
    var EducationStartElement = document.getElementById("EducationStart");
    var EducationEndElement = document.getElementById("EducationEnd");
    var UniversityNameElement = document.getElementById("UniversityName");
    var AchievementsElement = document.getElementById("Achievements");
    var ExperienceElement = document.getElementById("Experience");
    var CompanyNameElement = document.getElementById("CompanyName");
    var CompanyDetailsElement = document.getElementById("CompanyDetails");
    var JobStartElement = document.getElementById("JobStart");
    var JobEndElement = document.getElementById("JobEnd");
    var SkillElement = document.getElementById("Skills");
    var UploadimgElement = document.getElementById("Uploadimg");
    // --
    var userNameElement = document.getElementById("username");
    if (NameElement &&
        OccupationElement &&
        EmailElement &&
        PhoneElement &&
        AddressElement &&
        DegreeElement &&
        EducationStartElement &&
        EducationEndElement &&
        UniversityNameElement &&
        AchievementsElement &&
        ExperienceElement &&
        CompanyNameElement &&
        CompanyDetailsElement &&
        JobStartElement &&
        JobEndElement &&
        SkillElement &&
        UploadimgElement &&
        // --
        userNameElement) {
        var name_1 = NameElement.value;
        var occupation_1 = OccupationElement.value;
        var email_1 = EmailElement.value;
        var phone_1 = PhoneElement.value;
        var address_1 = AddressElement.value;
        var degree_1 = DegreeElement.value;
        var educationStart_1 = EducationStartElement.value;
        var educationEnd_1 = EducationEndElement.value;
        var universityName_1 = UniversityNameElement.value;
        var achievements_1 = AchievementsElement.value;
        var experience_1 = ExperienceElement.value;
        var companyName_1 = CompanyNameElement.value;
        var companyDetails_1 = CompanyDetailsElement.value;
        var jobStart_1 = JobStartElement.value;
        var jobEnd_1 = JobEndElement.value;
        var skills_1 = SkillElement.value;
        // -- 
        var username = userNameElement.value;
        var uniquePath_1 = "resumes/".concat(username.replace(/\s+/g, '_'), "_cv.html");
        // 
        var file = UploadimgElement.files[0];
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var imageDataUrl = reader_1.result;
            var resumeOutput = "\n              <div class=\"all-div\">\n                  <div class=\"res-one-div\">\n                      <div>\n                          <img height=\"160\" width=\"160\" src=\"".concat(imageDataUrl, "\" alt=\"Uploaded Image\" />\n                      </div>\n                      <div class=\"name-occupation-div\">\n                          <h2 class=\"name\"> <span id='edit-name' class='editable'>  ").concat(name_1, " </span></h2>\n                          <div class=\"hr-div\"></div>\n                          <h3 class=\"occupation\"><span id='edit-occupation' class='editable'>").concat(occupation_1, " </span></h3>\n                      </div>\n                  </div>\n                  <div class=\"data-div\">\n                      <div>\n                          <div class=\"experience-div\">Experience</div>\n                          <div class=\"experience-data-div\">\n                              <div>\n                                  <ul class=\"ul-data\">\n                                      <li>\n                                          <h6><span id='edit-experience' class='editable'>").concat(experience_1, " </span> </h6>\n                                          <p><span id='edit-jobstart' class='editable'>").concat(jobStart_1, "</span> to <span id='edit-jobend' class='editable'> ").concat(jobEnd_1, "</span></p>\n                                      </li>\n                                  </ul>\n                              </div>\n                              <div class=\"company-div\">\n                                  <div>\n                                      <h4><span id='edit-companyname' class='editable'>").concat(companyName_1, " </span> </h4>\n                                      <p><span id='edit-companydetails' class='editable'>").concat(companyDetails_1, " </span> </p>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div>\n                          <div class=\"experience-div\">Education</div>\n                          <div class=\"experience-data-div\">\n                              <div>\n                                  <ul class=\"ul-data\">\n                                      <li>\n                                          <h6><span id='edit-degree' class='editable'>").concat(degree_1, " </span> </h6>\n                                          <p><span id='edit-educationstart' class='editable'>").concat(educationStart_1, " </span>  to <span id='edit-educationend' class='editable'>").concat(educationEnd_1, " </span> </p>\n                                      </li>\n                                  </ul>\n                              </div>\n                              <div class=\"company-div\">\n                                  <div>\n                                      <h4><span id='edit-universityname' class='editable'>").concat(universityName_1, " </span> </h4>\n                                      <p><span id='edit-achievements' class='editable'>").concat(achievements_1, " </span> </p>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                      <div class=\"contact-skill-div\">\n                          <div class=\"contact-divv\">\n                              <div class=\"contact-div\">Contact</div>\n                              <div class=\"contact-data\">\n                                  <p><span id='edit-address' class='editable'>").concat(address_1, " </span> </p>\n                                  <p><span id='edit-phone' class='editable'>").concat(phone_1, " </span> </p>\n                                  <p><span id='edit-email' class='editable'>").concat(email_1, " </span> </p>\n                              </div>\n                          </div>\n                          <div>\n                              <div class=\"skill-div\">Skills</div>\n                              <div class=\"skills\">\n                                  <div><span id='edit-skills' class='editable'>").concat(skills_1, " </span> </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          ");
            // --
            var downloadlink = document.createElement('a');
            downloadlink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
            downloadlink.download = uniquePath_1;
            downloadlink.textContent = "Download Your 2024 Resume";
            var resumeOutputElement = document.getElementById("resumeOutput");
            if (resumeOutputElement) {
                resumeOutputElement.innerHTML = resumeOutput;
                resumeOutputElement.appendChild(downloadlink);
                // const buttonsContainer = document.createElement('div');
                // buttonsContainer.id = "buttonsContainer";
                // resumeOutputElement.appendChild(buttonsContainer);
                resumeOutputElement.style.display = resumeOutput;
            }
            else {
                console.error("the resume output elements are missing");
            }
        };
        reader_1.readAsDataURL(file);
    }
    else {
        console.error("one or more output elements are missing");
    }
});
