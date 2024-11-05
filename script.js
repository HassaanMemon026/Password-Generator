class Generator { // Fixed class name typo from 'genetator' to 'Generator'
    constructor() {
      this.lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
      this.upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      this.numericChars = "0123456789";
      this.specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
    }
  
    lowerCase() {
      const randomIndex = Math.floor(Math.random() * this.lowerCaseChars.length);
      return this.lowerCaseChars[randomIndex];
    }
  
    upperCase() {
      const randomIndex = Math.floor(Math.random() * this.upperCaseChars.length);
      return this.upperCaseChars[randomIndex];
    }
  
    numeric() {
      const randomIndex = Math.floor(Math.random() * this.numericChars.length);
      return this.numericChars[randomIndex];
    }
  
    special() {
      const randomIndex = Math.floor(Math.random() * this.specialChars.length);
      return this.specialChars[randomIndex];
    }
    superStrongPassword(length = 32) {
      let password = "";
      const selectors = [
        this.lowerCase.bind(this),
        this.upperCase.bind(this),
        this.numeric.bind(this),
        this.special.bind(this)
      ];
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectors.length);
        password += selectors[randomIndex](); // Call the function directly
      }
      return password;
    }
    strongPassword(length = 16) {
      let password = "";
      const selectors = [
        this.lowerCase.bind(this),
        this.upperCase.bind(this),
        this.numeric.bind(this),
        this.special.bind(this)
      ];
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectors.length); // Corrected variable name
        password += selectors[randomIndex](); // Call the function directly
      }
      return password;
    }
  
    weakPassword(length = 8) {
      let password = "";
      const selectors = [
        this.lowerCase.bind(this),
        this.upperCase.bind(this),
        this.numeric.bind(this)
      ];
  
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * selectors.length); // Corrected variable name
        password += selectors[randomIndex](); // Call the function directly
      }
      return password;
    }
  
    funnyPassword() {
      const funnyPasswords = [
        "p@ssWord", "inc0rr3ct", "12345678", "qw3rty", "adm1n",
        "letme1n", "monk3y", "secret", "abc12E", "i1oveyou",
        "trustno1", "P@ssword_G3ner@tor", "i1oveu", "did_you_kn0w",
        "P4ssw0rd_Is_FUnny!", "L0l_H4ck3r_N0tR34lly", "C4tV1deo5_Rul3_Th3W0rld",
        "P1zza_L0v3r_123#", "S3cr3t_Ag3nt_007!", "F00tb4ll_Ch4mp10n_2023",
        "C0mput3r_W1zard_M4g1c", "D0nt_P4n1c_42", "P4ssw0rd_1s_M4th_H4rd",
        "S4ndw1ch_L0v3r_999", "R41nb0w_Un1c0rn_D4nc3", "C0ff33_4dd1ct_777",
        "S0c14l_M3d14_1s_F4k3", "V1d30_G4m3_L3g3nd_888",
        "P4ssw0rd_1s_M4g1c_W0rd", "Sh4rky_T00thbrush_555",
        "P1zZ4_P4rtY_N3xtW", "C4t_V1d30s_M4k3_M3_H4ppy",
        "S4f3_4nd_S3cur3_P4ss", "F00tb4ll_G04ls_4r3_B3st"
      ];
      return funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)];
    }
  }
  
  let generate = new Generator();
  
  console.log(generate.superStrongPassword());
  console.log(generate.strongPassword());
  console.log(generate.weakPassword());
  console.log(generate.funnyPassword());
  
  // Update the length value on input change
  let superStrong = document.getElementById("super-strong")
  let strong = document.getElementById("strong")
  let weak = document.getElementById("weak")
  let funny = document.getElementById("funny")
  document.addEventListener('DOMContentLoaded', (event) => {
    let generateBtn = document.getElementById("generate");
    let buttonContainer = document.getElementById("button-container");
  
    generateBtn.addEventListener("click", () => {
      let selectedCheckbox = document.querySelector(`input[name="strength"]:checked`);
      let password = "";
  
      if (selectedCheckbox) {
        if (selectedCheckbox.id === "super-strong") {
          password = generate.superStrongPassword();
        } else if (selectedCheckbox.id === "strong") {
          password = generate.strongPassword();
        } else if (selectedCheckbox.id === "weak") {
          password = generate.weakPassword();
        } else if (selectedCheckbox.id === "funny") {
          password = generate.funnyPassword();
        } else {
          password = "Please select a strength or check the button";
        }
  
        if (buttonContainer) {
          buttonContainer.innerHTML = `<h2>${password}</h2>`;
        } else {
          console.error("Button container not found.");
        }
      } else {
        if (buttonContainer) {
          buttonContainer.innerHTML = "Please select a strength.";
        } else {
          console.error("Button container not found.");
        }
      }
    });
  });
  
  
  
  
  
  
  
  
  
  
  function updateLengthValue(value) {
    document.getElementById('length-value').textContent = value;
  }
  
  // Toggle the sliding container, close it and reopen with new content
  document.getElementById('auto-generate-btn').addEventListener('click', function() {
    var slidingContainer = document.getElementById('sliding-container');
    var originalContent = document.getElementById('original-content');
    var newContent = document.getElementById('new-content');
  
    // Close the container
    slidingContainer.classList.add('slide-close');
    setTimeout(function() {
      // Switch content after closing
      slidingContainer.classList.remove('slide-close');
      if (originalContent.style.display !== "none") {
        originalContent.style.display = "none";
        newContent.style.display = "block";
      } else {
        originalContent.style.display = "block";
        newContent.style.display = "none";
      }
      // Re-open the container
      slidingContainer.classList.add('slide-open');
      setTimeout(function() {
        slidingContainer.classList.remove('slide-open');
      }, 500);
    }, 500);
  });
  
  // Keep the sliding container open on page load
  window.onload = function() {
    var slidingContainer = document.getElementById('sliding-container');
    slidingContainer.style.maxHeight = slidingContainer.scrollHeight + "px";
  }
  
  