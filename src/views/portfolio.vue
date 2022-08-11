<script setup>
import { ref, reactive, onMounted } from 'vue'

const darkTheme = ref(false);
const frame = ref(1);
const isModalVisible = ref(false);
const experiences = ref([
              {
              title: "Senior Reporting Accountant",
              company: "DigitalBridge Group",
              location: "Los Angeles",
              timeframe: "July 2021 - Present",
              summary: `
                        In this role, I assisted a large accelerated filer through its sale of two reporting segments and transformation from a traditional REIT to a C-Corp. This happened over the course of four quarterly reports and one annual report. 
                        In my current role, I am challenged with finding ways to automate recurring tasks performed at each period end, which allows me to think creatively as a developer and pragmatically as an accountant.
                        <br><br>
                        Transferrable skills include change management, general ledger analysis, and process improvement.
                    `,
              skillsAcquired: [
                "Cross-functional Collaboration",
                "Data Analysis",
                "Data Collection",
              ],
              expanded: false,
              minimizedLength: 500,
            },
            {
              title: "Experienced Audit Associate",
              company: "KPMG",
              location: "Los Angeles",
              timeframe: "August 2019 - June 2021",
              summary: `
                        As an audit associate in the Los Angeles practice, I have experience providing audit services to large private and public Financial Services companies. 
                        The opportunity to work directly with upper-level management has helped cultivate strong verbal and written communication skills.
                        My proudest achievements at the firm have been owning and managing the audit services over a bank's deposit portfolio, driving KPMG's digital transformation effort on a national level,
                        and designing scripts and routines to automate repetitive tasks thereby reducing hours spent working and charged. 
                        <br><br>
                        Transferrable skills from this position include adept financial statement analysis, detail-oriented & questioning mindset, and deadline driven work ethic. 
                    `,
              skillsAcquired: [
                "10-K Analysis",
                "Ad-Hoc Reporting",
                "Financial Accounting",
                "Technology Implementation",
                "Trend Analysis",
                "Variance Analysis",
              ],
              expanded: false,
              minimizedLength: 570,
            },
            {
              title: "Resident Advisor",
              company: "San Diego State University",
              location: "San Diego",
              timeframe: "September 2016 - May 2018",
              summary: `
                        The opportunity to work as a Resident Advisor (RA) during my undergraduate degree contributed heavily to how I approach team dynamics. 
                        My position as an RA has strengthened my communication habits (e.g., active listening) as I worked with 60+ residents and fellow RA's with different
                        communication styles. Over the span of two years, I was encouraged to wear different hats across multiple teams to aid each resident's undergraduate 
                        journey. Additionally, for the two academic years as an RA, I have hosted 30+ successful programs within budget. 
                        <br><br>
                        Transferrable skills from this position include critical thinking and verbal communication.
                    `,
              skillsAcquired: [
                "Budget Management",
                "Conflict Resolution",
                "Critical Thinking",
                "Verbal Communication",
              ],
              expanded: false,
              minimizedLength: 490,
            }
]);
const skills = reactive([
            {
              name: "Microsoft Excel",
              picture: "../src/assets/excel.svg",
              description: `My primary uses of excel are to clean and prepare data for analysis, 
                                    create models & reports to provide succinct, high-level summaries, 
                                    and organize & validate data. Capable of 
                    creating and maintaining complex schedules to support financial analysis.`,
              showcase: false,
              modalShowing: false,
            },
            {
              name: "Power BI",
              picture: "../src/assets/powerBI.svg",
              description: `I use Power BI for exploratory data analysis and project management & KPI monitoring. 
                                    Additionally, Power BI is effective for creating re-usable routines that help visualize each step of the data loading and cleaning process.`,
              showcase: false,
              modalShowing: false,
            },
            {
              name: "Python",
              picture: "../src/assets/python.svg",
              description: `My Python areas of expertise lie in ad-hoc data manipulation & analysis, automation scripts, 
                                    and data collection via web scraping. See a business use case I have implemented at my previous experience.`,
              showcase: true,
              modalShowing: false,
            },
            {
              name: "Automation",
              picture: "../src/assets/automation.png",
              description: `Have written Python scripts and created Power BI routines to automate administrative tasks and testwork procedures to reduce client-incurred expenses.`,
              showcase: false,
              modalShowing: false,
            },
]);
const interests = ref([
            "Basketball - New Orleans Pelicans",
            "Investing - BL, CVS, FTNT & PATH",
            "Web Development - HTML, Python, Vue.js",
]);

function closeModals () {
    var i = 0;
    for (i = 0; i < skills.length; i++) {
        skills[i].modalShowing = false;
    }
    isModalVisible.value = false;
}

onMounted(() => {
  var rellax = new Rellax(".rellax", {
    center: false,
    });
})

// watch: {
//     isModalVisible: function () {
//     if (this.isModalVisible) {
//         document.documentElement.style.overflow = "hidden";
//         return;
//     }

//     document.documentElement.style.overflow = "auto";
//     },
// },
</script>


<template>
<div
      :class="darkTheme ? 'darkThemeBackground' : ''"
      class="themeSwap"
    >
      <div style="width: 97%; margin: auto">
        <nav>
          <ul class="themeSwap" :class="darkTheme ? 'darkThemeFontColor' : ''">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#education">Education</a></li>
          </ul>
          <div class="toggle-btn" id="toggle-btn">
            <input v-model="darkTheme" type="checkbox" />
            <span></span>
          </div>
        </nav>

        <!-- <hr style="width: 97.5%;margin: auto;margin-bottom: 20px;padding:0;"> -->

        <section class="content" id="intro">
          <div>
            <h1
              class="introName rellax themeSwap"
              data-rellax-speed="-1"
              :class="darkTheme ? 'darkThemeFontColor' : ''"
            >
              Ruoyu Chen
            </h1>
            <blockquote
              class="introQuote rellax themeSwap"
              data-rellax-speed="1"
              :class="darkTheme ? 'darkThemeSecondaryFontColor' : ''"
            >
              "To know even one life has breathed easier because you have lived.
              This is to have succeeded."
            </blockquote>
          </div>
          <div class="headshotContainer">
            <div class="circle1 rellax" data-rellax-speed="-1"></div>
            <div class="circle2 rellax" data-rellax-speed="1"></div>
          </div>
        </section>

        <section class="content" id="experience">
          <h2
            class="sectionHeader themeSwap"
            :class="darkTheme ? 'darkThemeFontColor' : ''"
          >
            Experience
          </h2>
          <div class="experienceContainer">
            <div class="experienceCard" v-for="experience in experiences">
              <h3
                class="themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
              >
                {{ experience.title }}
              </h3>
              <h4>
                {{ experience.company }} | {{ experience.location }} | {{
                experience.timeframe }}
              </h4>
              <p
                class="experienceSummary themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
              >
                <span
                  v-if="!experience.expanded"
                  v-html="experience.summary.slice(0, experience.minimizedLength) + '...' "
                ></span>
                <span v-else v-html="experience.summary"></span>

                <br /><br />

                <span
                  v-if="!experience.expanded"
                  @click="experience.expanded = !experience.expanded"
                  style="cursor: pointer"
                  >See More</span
                >
                <span
                  v-else
                  @click="experience.expanded = !experience.expanded"
                  style="cursor: pointer"
                  >See Less</span
                >
              </p>
              <div class="skillsAcquiredContainer">
                <p
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeSkillsAcquired' : ''"
                  v-for="skill in experience.skillsAcquired"
                >
                  {{ skill }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="content" id="skills">
          <h2
            class="sectionHeader themeSwap"
            :class="darkTheme ? 'darkThemeFontColor' : ''"
          >
            Tools &amp; Skills
          </h2>
          <div class="skillsContainer">
            <div
              v-for="skill in skills"
              class="skillCard"
              :class="darkTheme ? 'darkThemeSkillCard' : ''"
            >
              <h3
                class="themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
              >
                {{ skill.name }}
              </h3>
              <img :src="skill.picture" />
              <p
                class="themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
                v-html="skill.description"
              ></p>
              <button
                v-if="skill.showcase"
                @click="skill.modalShowing = !skill.modalShowing; isModalVisible = true"
              >
                Use Case
              </button>
            </div>
          </div>

          <!-- Modals -->
          <transition name="fade">
            <div
              class="modalBackdrop"
              @click="closeModals"
              v-if="skills.filter(obj => {return obj.modalShowing == true}).length > 0"
              v-cloak
            ></div>
          </transition>

          <transition name="fade">
            <div
              class="modal pythonModal themeSwap"
              :class="darkTheme ? 'darkThemeModal' : ''"
              v-if="skills.filter(obj => {return obj.name == 'Python'})[0].modalShowing"
              v-cloak
            >
              <span
                class="themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
                @click="closeModals"
                style="
                  position: absolute;
                  top: 5px;
                  right: 15px;
                  cursor: pointer;
                  padding: 10px;
                  font-size: 1.2em;
                "
                >&#10006;</span
              >

              <div class="modalLeft themeSwap" v-cloak>
                <h2
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                >
                  Python Use Cases
                </h2>
                <br />
                <p
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                  v-html="skills.filter(obj => {return obj.name == 'Python'})[0].description"
                ></p>
                <br />
                <p
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                >
                  As an auditor, our primary responsibility is to understand our
                  client's business, identify the high risk areas, and design
                  procedures to evaluate whether there are any areas of weakness
                  or if there are any financial misstatements. We document our
                  risk analysis and procedures in our audit software and send it
                  to our managers & partners for review.
                </p>
                <br />
                <p
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                >
                  A large public company will have many processes (for example a
                  bank will have a deposit process and lending process), each of
                  which have their own respective risks. As a result, navigating
                  and reviewing all the risks within a process can take a bit of
                  time. Our audit software does offer to consolidate our
                  documentation into one excel file, however the file can be
                  quite cumbersome to navigate, see
                  <b>Exhibit #1</b>. I have limited the example to three risks
                  and have simplified the documentation. In a typical process,
                  there can be anywhere from 10-30 risks. I saw an opportunity
                  to create a tool that would allow a reviewer to understand our
                  documentation more naturally.
                </p>
                <br />
                <p
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                >
                  My solution was to create a report generator that reads in the
                  excel file, and structures the information into a more legible
                  format. Each row in the excel had been turned into an
                  individual page, and each risk is accounted for within a side
                  panel. The project creation consumed 4 hours, and resulted in
                  in a tool that can be re-used across any team and any process.
                  The report is dynamic, see <b>Exhibit #2</b>, and can be sent
                  as a standalone file through email. The value delivered from
                  this report is the ability to review each risk in isolation
                  and track which risks have already been reviewed.
                </p>
              </div>

              <div class="modalRight themeSwap" v-cloak>
                <h2
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                >
                  Exhibit #1
                </h2>
                <img src="../assets/raarExample.png" />
                <br /><br />
                <h2
                  class="themeSwap"
                  :class="darkTheme ? 'darkThemeFontColor' : ''"
                >
                  Exhibit #2
                </h2>
                <video autoplay muted loop playsinline>
                  <source
                    src="../assets/raarDemonstration.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </transition>
        </section>

        <section id="educationAndInterests" class="content">
          <div id="education">
            <h2
              class="sectionHeader themeSwap"
              :class="darkTheme ? 'darkThemeFontColor' : ''"
            >
              Education
            </h2>
            <br />
            
            <div class="educationCard">
              <img
                v-if="!darkTheme"
                style="transform: scale(0.9); align-self: center"
                src="../assets/sdsu.png"
              />
              <img
                v-else
                style="transform: scale(0.8); height: 110px; align-self: center"
                src="../assets/sdsuDarkMode.png"
              />

              <div
                class="themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
              >
                <h3>San Diego State University</h3>
                <ul>
                  <li>
                    B.S. in Business Administration with a focus in Accounting
                  </li>
                  <li>Minor in Management Information System</li>
                </ul>
                <p class="educationDate">Aug. 2015 - May 2019</p>
              </div>
            </div>
            <div class="educationCard">
              <img
                v-if="!darkTheme"
                style="height: 90px; align-self: center"
                src="../assets/cba.jpg"
              />
              <img
                v-else
                style="height: 90px; align-self: center; filter: grayscale(50%)"
                src="../assets/cbaDarkMode.png"
              />

              <div
                class="themeSwap"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
              >
                <h3>California Board of Accountancy</h3>
                <p class="educationDate">Licensed as of Feb. 2022</p>
              </div>
            </div>
          </div>
          <div id="interests">
            <h2
              class="sectionHeader themeSwap"
              :class="darkTheme ? 'darkThemeFontColor' : ''"
            >
              Interests
            </h2>
            <ul style="margin-top: 15px">
              <li
                class="themeSwap interestItem"
                :class="darkTheme ? 'darkThemeFontColor' : ''"
                v-for="interest in interests"
                v-html="interest"
              ></li>
            </ul>
          </div>
        </section>
      </div>

      <footer class="themeSwap" :class="darkTheme ? 'darkThemeFooter' : ''">
        <h2>Let's Connect</h2>
        <hr style="height: 3px; width: 100px; background-color: white" />
        <div class="contactInfo">
          <a href="https://www.linkedin.com/in/ruoyuchen97/" target="_blank">
            <img src="../assets/linkedin.svg" />
          </a>
          <a href="mailto:ruoyuchen97@gmail.com">
            <img src="../assets/email.png" />
          </a>
        </div>
      </footer>
    </div>
</template>