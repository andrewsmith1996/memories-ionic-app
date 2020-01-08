<template>
   <section class="projects">
      <div class="projects__inner-container">
        <div class="project-showcase__header">
            <h2>Projects &amp; Extra Curricular</h2>
            <p class="subtitle">What have I done?</p>
        </div>
        <div class="projects__cards">
            <div class="projects__card projects__card--three">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">Industrial Placement year</h3>
                    <p class="projects__card-description">Year in industry creating websites and online software at <a href="https://cursor.co.uk" target="_blank">Cursor</a> for customers and clients across a broad range of industries. Helpdesk technical support, designing front-end wireframes and visuals and general software development processes. Involved in client meetings, working closely with professional clients and participating in R&amp;D projects.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="110" src="../assets/images/projects/cursor.png" alt="MTA Exam" />
                <span class="projects__card-date">2017 - 2018</span>
            </div>

            <div class="projects__card projects__card--three">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">Founder &amp; President of the UoL Diabetes Group</h3>
                    <p class="projects__card-description">Founded &amp; President of the University of Lincoln Diabetes Group. Maintaining responsibilities, organisation, leadership skills, delegating roles and communication. Organised events, fundraisers and liased with resarchers regarding research projects.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="130" src="../assets/images/projects/diabetes-group.png" alt="MTA Exam" />
                <span class="projects__card-date">2015 - 2017</span>
            </div>

            <div class="projects__card projects__card--three">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">Google Cloud Platform Certification</h3>
                    <p class="projects__card-description">Achieved the official Google Cloud Platform Fundamentals: Core Infrastructure Certficiation. <br>Click <a href="https://www.coursera.org/account/accomplishments/verify/YLLAVXGRLRBG">here</a> to view certification.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="300" src="../assets/images/projects/google_cloud.png" alt="MTA Exam" />
                <span class="projects__card-date">2019</span>
            </div>

            <div class="projects__card with-img">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">Microsoft Technology Associate</h3>
                    <p class="projects__card-description">Officially certified as a Microsoft Technology Associate in HTML5 Application Development Fundamentals.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="150" height="150" src="../assets/images/assets/mta-logo.png" alt="MTA Exam" />
                <span class="projects__card-date">2019</span>
            </div>

            <div class="projects__card projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">Computer Science Course Representative</h3>
                    <p class="projects__card-description">Course Representative for Computer Science at University. Ability to communicate well, plan well and manage time successfully.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="200" src="../assets/images/projects/uni-lincoln.png" alt="MTA Exam" />
                <span class="projects__card-date">2015 - 2016</span>
            </div>
            
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">ICT Service Desk Technician</h3>
                    <p class="projects__card-description">Solving problems with computers and mobile devices across multiple operating systems and give out technical advice.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="200" src="../assets/images/projects/uni-lincoln.png" alt="MTA Exam" />
                <span class="projects__card-date">2015 - 2017, 2018 - 2019</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">School of Computer Science Student Ambassador</h3>
                    <p class="projects__card-description">Supporting events such as Open Days, Applicant Open Days, School liaison events and other odd jobs around the School.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="200" src="../assets/images/projects/uni-lincoln.png" alt="MTA Exam" />
                <span class="projects__card-date">2015 - 2017</span>
            </div>
    
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">The Lincoln Award</h3>
                    <p class="projects__card-description">I have completed the Lincoln Award; the University of Lincoln’s standalone Employability award.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="200" src="../assets/images/projects/lincoln_award.png" alt="MTA Exam" />
                <span class="projects__card-date">2016</span>
            </div>

            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">IT Tutor (Volunteer)</h3>
                    <p class="projects__card-description">Volunteer at the Long Eaton 50+ Forum to teach 50+ year olds a better understanding in using their computing and mobile devices.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="130" src="../assets/images/projects/50-plus-forum.png" alt="MTA Exam" />
                <span class="projects__card-date">2015 - present</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">School of Computer Science Interview Panel</h3>
                    <p class="projects__card-description">Questioned candidates in the recruitment of new lecturers and researchers. Communicated feedback to the Head of School.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="200" src="../assets/images/projects/uni-lincoln.png" alt="MTA Exam" />
                <span class="projects__card-date">2017</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">AOL London Work Placement </h3>
                    <p class="projects__card-description">Placement in AOL's specialised web and software department to gain valuable advice and experience from experts within a multinational company. Shadowed teams of developers and designers mainly working with JavaScript technologies. Also given opportunity to attend meetings on advertising based solutions.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="150" src="../assets/images/projects/aol.png" alt="MTA Exam" />
                <span class="projects__card-date">2014</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">NHS Practice IT Consultant</h3>
                    <p class="projects__card-description">Implemented media solutions for a professional inspection and solving general IT problems within the practice.</p>
                </div>
                <img :immediate="true" class="projects__card-image" width="200" src="../assets/images/projects/nhs.png" alt="MTA Exam" />
                <span class="projects__card-date">2015</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">BCS work placement</h3>
                    <p class="projects__card-description">Placement in local computer repair shop. Allowed me to understand working professionally and give good customer service.</p>
                </div>
                <span class="projects__card-date">2014</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">Chairman of Social Events</h3>
                    <p class="projects__card-description">Vice Chairman of Social Events in the Sixth Form Council, eventually becoming the Chairman.</p>
                </div>
                <span class="projects__card-date">2013</span>
            </div>
        
            <div class="projects__card">
                <div class="projects__card-content">
                    <h3 class="projects__card-title">2:1 in Brilliant Club scheme</h3>
                    <p class="projects__card-description">2:1 in the Brilliant Club programme where I attended tutorials and completed a University assignment whilst at Sixth Form.</p>
                </div>
                <span class="projects__card-date">2013</span>
            </div>
        </div>
        </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop, Mixins } from "vue-property-decorator";

@Component
export default class Projects extends Vue {

}
</script>

<style lang="scss">

</style>