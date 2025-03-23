<template>
  <div class="container-wrapper">
    <div class="job-header-wrapper">
      <div class="wrapper">
        <h2>{{ jobTitle }}</h2>
        <div class="apply-btn">Apply Now</div>
      </div>
      <p class="company">{{ company }}</p>
      <p class="location"><MapPin />{{ location }}</p>
      <p class="email"><img src="@\img\joblist-mail.svg" />{{ email }}</p>
    </div>

    <div class="content-wrapper">
      <div class="content-role">
        <h3>About the Role</h3>
        <div class="description">{{ jobDescription }}</div>
      </div>

      <div class="content-responsibilities">
        <h3>Key Responsibilities</h3>
        <ul>
          <li v-for="(responsibility, index) in responsibilities" :key="index">
            {{ responsibility }}
          </li>
        </ul>
      </div>

      <div class="content-req">
        <h3>Requirements</h3>
        <ul>
          <li v-for="(requirement, index) in requirements" :key="index">
            {{ requirement }}
          </li>
        </ul>
      </div>

      <div class="content-preferred">
        <h3>Preferred Qualifications</h3>
        <ul>
          <li v-for="(qualification, index) in preferredQualifications" :key="index">
            {{ qualification }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { MapPin } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'

import api from '@/api/index'

onMounted(async () => {
  const jobList = await api.jobListing(95)

  if (jobList[0]) {
    const jobdesc = jobList[0]

    jobTitle.value = jobdesc.name
    company.value = jobdesc.employer.name
    location.value = jobdesc.location || 'Malaysia'
    jobDescription.value = jobdesc.description
    responsibilities.value = jobdesc.responsibilities
    requirements.value = jobdesc.skills
    preferredQualifications.value = [jobdesc.qualifications]
  }
})

const jobTitle = ref('Security Operation (Kulai, Johor)')
const company = ref('Gamuda Sdn Bhd')
const location = ref('San Francisco, CA')
const email = ref('sarah.anderson@email.com')

const jobDescription = ref(
  'We are looking for a Junior Malware Analyst to join our cybersecurity team. You will play a crucial role in analyzing malicious software, investigating security incidents, and strengthening our organizations defenses against cyber threats. If you have a passion for cybersecurity, problem-solving, and hands-on malware analysis, we want to hear from you!',
)

const responsibilities = ref([
  'Analyze and reverse engineer malware, including PE files and scripts.',
  'Investigate security incidents involving phishing, malware, and APTs.',
  'Utilize tools such as IDA Pro, Ghidra, Wireshark, and YARA to analyze threats.',
  'Develop and implement detection rules using SIEM platforms like Splunk.',
  'Research emerging malware trends to improve threat intelligence.',
  'Collaborate with the security team to recommend mitigation strategies.',
  'Document findings and create detailed reports on malware behavior.',
])

const requirements = ref([
  "Bachelor's degree in Computer Science, Cybersecurity, or related field.",
  '1+ years of experience in malware analysis or digital forensics.',
  'Understanding of malware analysis techniques (static, dynamic, behavioral).',
  'Familiarity with programming languages (Python, C, Assembly preferred).',
  'Knowledge of Windows and Linux internals.',
  'Experience with network analysis and forensic tools.',
])

const preferredQualifications = ref([
  'Certifications such as GREM, OSCP, or CEH.',
  'Experience with sandboxing environments.',
  'Prior experience analyzing email-based threats.',
])
</script>

<style lang="scss" scoped>
$primary-color: #333;
$secondary-color: #555;
$background: #f9f9f9;

.container-wrapper {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1.5rem;
  border-color: red;
  //   background: red;
  //   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  //   border-radius: 8px;

  .job-header-wrapper {
    h2 {
      font-size: 1.75rem;
      font-weight: 600;
      color: $primary-color;
    }

    .apply-btn {
      border-radius: 25px;
      padding: 0.5rem 3rem;
      background-color: #000;
      color: #fff;
      font-weight: 700;
      cursor: pointer;
    }
    .wrapper {
      display: flex;
      justify-content: space-between;
    }
    .company {
      color: $secondary-color;
      font-size: 1rem;
    }

    .location,
    .email {
      color: $secondary-color;
      font-size: 0.95rem;
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }

  .content-wrapper {
    h3 {
      margin-top: 1.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: $primary-color;
    }

    .description {
      color: $secondary-color;
      text-align: justify;
    }

    ul {
      list-style: disc;
      padding-left: 1.25rem;
      color: $secondary-color;
    }
  }
}
</style>
