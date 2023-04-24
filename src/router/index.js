import Vue from 'vue'
import VueRouter from 'vue-router'

// dashboard
import AdminDashboard from '../views/Dashboard/AdminDashboard.vue'
import EmployerDashboard from '../views/Dashboard/EmployerDashboard.vue'
import ApplicantDashboard from '../views/Dashboard/ApplicantDashboard.vue'

//authentication
import LoginPage from '@/authentication/LoginPage.vue'
import RegisterPage from '@/authentication/RegisterPage.vue'

//Students View
import ScholarAppForm_Student from '../views/StudentView/CardHolder/ScholarAppForm_Student.vue'
import SkillsSurveyForm_Student from '../views/StudentView/CardHolder/SkillsSurveyForm_Student.vue'
import StudentProfile from '../views/StudentView/StudentProfile.vue'

import StudentAnnouncement_Page from '../views/StudentView/StudentAnnouncement_Page.vue'


//Employer View
import JobPosts from '../views/EmployerView/JobPosts.vue'
import EmpAppointment from '../views/EmployerView/EmpAppointment.vue'
import EmployerProfile from '../views/EmployerView/EmployerProfile.vue'
import EmployerApplicant from '../views/EmployerView/EmpApplicant.vue'
import EmployerHiredApplicant from '../views/EmployerView/EmpHiredApplicant.vue'
import JobPostingId from '../views/EmployerView/CardHolder/JobPostingId.vue'
import AppointmentId from '../views/EmployerView/CardHolder/AppointmentId.vue'
import AppointmentSetting from '../views/EmployerView/CardHolder/AppointmentSetting.vue'


//Admin View
import AdminProfile from '../views/AdminView/AdminProfile.vue'
import AdminForms from '../views/AdminView/AdminForms.vue'
import SsForm from '../views/AdminView/CardHolder/SsForm.vue'
import ScholarAppForm from '../views/AdminView/CardHolder/ScholarAppForm.vue'
import EnterpriseDevelopment from '../views/AdminView/CardHolder/EnterpriseDevelopment.vue'
import EstablishmentSurvey from '../views/AdminView/CardHolder/EstablishmentSurvey.vue'
import EntrepreneurialProgram from '../views/AdminView/CardHolder/EntrepreneurialProgram.vue'
import StudentList from '../views/AdminView/ListHolder/StudentList.vue'
import ApplicantList from '../views/AdminView/ListHolder/ApplicantList.vue'
import EmployerList from '../views/AdminView/ListHolder/EmployerList.vue'
import OFWList from '../views/AdminView/ListHolder/OFWList.vue'
import ApprovalList from '../views/AdminView/ListHolder/ApprovalList.vue'
import RecommendationList from '../views/AdminView/ListHolder/RecommendationList.vue'
import ProcessingList from '../views/AdminView/ListHolder/ProcessingList.vue'

import TrainingOffer from '../views/AdminView/StatusCard/TrainingOffer.vue'
import StudentProgram from '../views/AdminView/StatusCard/StudentProgram.vue'
import AdminJobPost from '../views/AdminView/StatusCard/AdminJobPost.vue'
import AdminAnnouncement from '../views/AdminView/AdminAnnouncement.vue'

import HiredApplicants from '../views/AdminView/StatusCard/HiredApplicants.vue'
import DailyApplicants from '../views/AdminView/StatusCard/DailyApplicants.vue'
import DialogStudentList from '../views/AdminView/Dialog/DialogStudentList.vue'

import AdminApplicant from "../views/AdminView/AdminApplicant.vue"

import DataTable from "../views/DataTable.vue"

import Adminpage from '../views/AdminView/AdminPage.vue'
import AdminViewDashboard from '../views/AdminView/AdminViewDashboard.vue'

//Applicant View
import ApplicantProfile from '../views/ApplicantView/CardHolder/ApplicantProfile.vue'
import AvailableTraining from '../views/ApplicantView/CardHolder/AvailableTraining.vue'
import AppliedTraining from '../views/ApplicantView/CardHolder/AppliedTraining.vue'
import AppliedJobs from '../views/ApplicantView/CardHolder/AppliedJobs.vue'
import AvailableJobs from '../views/ApplicantView/CardHolder/AvailableJobs.vue'
import ScholarshipApplied from '../views/StudentView/CardHolder/ScholarshipApplied.vue'
import ScholarshipAvail from '../views/StudentView/CardHolder/ScholarshipAvail.vue'
import ApplicantAnnouncement from '../views/ApplicantView/CardHolder/ApplicantAnnouncement.vue'
import CBTEDForm_Page from '../views/ApplicantView/TrainingForms/CBTEDForm_Page.vue'
import CEEOForm_Page from '../views/ApplicantView/TrainingForms/CEEOForm_Page.vue'
import UpdateForm_Page from '../views/ApplicantView/TrainingForms/UpdateForm_Page.vue'
import PrintLayout from '../views/ApplicantView/PrintLayout.vue'

import MemberPage from '../views/ApplicantView/MemberPage.vue'

Vue.use(VueRouter)

const routes = [

  //MemberPage
  {
    path: '/MemberPage', name: 'MemberPage', component: MemberPage,
    children: [
      { path: '/MemberPage/ApplicantDashboard', name: 'ApplicantDashboard', component: ApplicantDashboard },
      { path: '/MemberPage/AvailableJobs', name: 'AvailableJobs', component: AvailableJobs },
      { path: '/MemberPage/AppliedJobs', name: 'AppliedJobs', component: AppliedJobs },
      { path: '/MemberPage/AvailableTraining', name: 'AvailableTraining', component: AvailableTraining },
      { path: '/MemberPage/AppliedTraining', name: 'AppliedTraining', component: AppliedTraining },
      
      { path: '/MemberPage/ScholarshipAvail', name: 'ScholarshipAvail', component: ScholarshipAvail },
      { path: '/MemberPage/ScholarshipApplied', name: 'ScholarshipApplied', component: ScholarshipApplied },
      { path: '/MemberPage/CBTEDForm_Page', name: 'CBTEDForm_Page', component: CBTEDForm_Page },
      { path: '/MemberPage/CEEOForm_Page', name: 'CEEOForm_Page', component: CEEOForm_Page },
      { path: '/MemberPage/UpdateForm_Page', name: 'UpdateForm_Page', component: UpdateForm_Page },
      { path: '/MemberPage/PrintLayout', name: 'PrintLayout', component: PrintLayout },

      { path: '/MemberPage/ApplicantAnnouncement', name: 'ApplicantAnnouncement', component: ApplicantAnnouncement },
      { path: '/MemberPage/ApplicantProfile', name: 'ApplicantProfile', component: ApplicantProfile },
    ]
  },

  //adminPage
  {
    path: '/AdminPage', name: 'AdminPage', component: Adminpage,
    children: [
      { path: '', name: 'AdminViewDashboard', component: AdminViewDashboard },
      { path: '/AdminPage/AdminApplicant', name: 'AdminApplicant', component: AdminApplicant },
      { path: '/AdminPage/AdminDashboard', name: 'AdminDashboard', component: AdminDashboard },
      { path: '/AdminPage/AdminForms', name: 'AdminForms', component: AdminForms },
      { path: '/AdminPage/ApprovalList', name: 'ApprovalList', component: ApprovalList },
      { path: '/AdminPage/RecommendationList', name: 'RecommendationList', component: RecommendationList },
      { path: '/AdminPage/ProcessingList', name: 'ProcessingList', component: ProcessingList },
      { path: '/AdminPage/StudentProgram', name: 'StudentProgram', component: StudentProgram },
      { path: '/AdminPage/TrainingOffer', name: 'TrainingOffer', component: TrainingOffer },
      { path: '/AdminPage/AdminJobPost', name: 'AdminJobPost', component: AdminJobPost },
      { path: '/AdminPage/AdminAnnouncement', name: 'AdminAnnouncement', component: AdminAnnouncement },
      { path: '/AdminPage/StudentList', name: 'StudentList', component: StudentList },
      { path: '/AdminPage/ApplicantList', name: 'ApplicantList', component: ApplicantList },
      { path: '/AdminPage/EmployerList', name: 'EmployerList', component: EmployerList },
      { path: '/AdminPage/OFWList', name: 'OFWList', component: OFWList },
      { path: '/AdminPage/AdminProfile', name: 'AdminProfile', component: AdminProfile },
    ],
  },
  {
    path: '/DataTable',
    name: 'DataTable',
    component: DataTable
  },
  //authentication
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  //dashboard 
  // {
  //   path: '/admindashboard',
  //   name: 'AdminDashboard',
  //   component: AdminDashboard
  // },
  {
    path: '/employerdashboard',
    name: 'EmployerDashboard',
    component: EmployerDashboard
  },
  {
    path: '/applicantdashboard',
    name: 'ApplicantDashboard',
    component: ApplicantDashboard
  },
  //students_view
  {
    path: '/ScholarAppForm_Student',
    name: 'ScholarAppForm_Student',
    component: ScholarAppForm_Student
  },
  {
    path: '/SkillsSurveyForm_Student',
    name: 'SkillsSurveyForm_Student',
    component: SkillsSurveyForm_Student
  },
  {
    path: '/StudentProfile',
    name: 'StudentProfile',
    component: StudentProfile
  },
  // {
  //   path: '/ScholarshipApplied',
  //   name: 'ScholarshipApplied',
  //   component: ScholarshipApplied_Page
  // },
  // {
  //   path: '/ScholarshipAvail',
  //   name: 'ScholarshipAvail',
  //   component: ScholarshipAvail_Page
  // },
  {
    path: '/StudentAnnouncement',
    name: 'StudentAnnouncement',
    component: StudentAnnouncement_Page
  },
  //employer_view
  {
    path: '/EmployerJobPosts',
    name: 'EmployerJobPosts',
    component: JobPosts
  },
  {
    path: '/EmployerAppointments',
    name: 'EmployerAppointments',
    component: EmpAppointment
  },
  {
    path: '/EmployerApplicant',
    name: 'EmployerApplicant',
    component: EmployerApplicant
  },
  {
    path: '/EmployerHiredApplicant',
    name: 'EmployerHiredApplicant',
    component: EmployerHiredApplicant
  },
  {
    path: '/EmployerProfile',
    name: 'EmployerProfile',
    component: EmployerProfile
  },
  {
    // path: '/JobPostingId/:id?',
    path: '/JobPostingid/:id/:admin',
    name: 'JobPostingId',
    component: JobPostingId
  },
  {
    // path: '/AppointmentId/:id?',
    path: '/Appointmentid/:id',
    name: 'AppointmentId',
    component: AppointmentId
  },
  {
    // path: '/AppointmentId/:id?',
    path: '/Appointmentsetting/:id',
    name: 'AppointmentSetting',
    component: AppointmentSetting
  },


  //applicant_view
  {
    path: '/ApplicantProfile',
    name: 'ApplicantProfile',
    component: ApplicantProfile
  },
  // {
  //   path: '/ApplicantAnnouncement',
  //   name: 'ApplicantAnnouncement',
  //   component: ApplicantAnnouncement_Page
  // },
  // {
  //   path: '/AvailableTraining',
  //   name: 'AvailableTraining',
  //   component: AvailableTraining_Page
  // },
  // {
  //   path: '/AvailableJobs',
  //   name: 'AvailableJobs',
  //   component: AvailableJobs_Page
  // },
  // {
  //   path: '/AppliedJobs',
  //   name: 'AppliedJobs',
  //   component: AppliedJobs_Page
  // },
  // {
  //   path: '/AppliedTraining',
  //   name: 'AppliedTraining',
  //   component: AppliedTraining_Page
  // },
  {
    path: '/CBTEDForm_Page',
    name: 'CBTEDForm_Page',
    component: CBTEDForm_Page
  },
  {
    path: '/CEEOForm_Page',
    name: 'CEEOForm_Page',
    component: CEEOForm_Page
  },
  {
    path: '/UpdateForm_Page',
    name: 'UpdateForm_Page',
    component: UpdateForm_Page
  },

  //admin_view
  {
    path: '/AdminApplicant',
    name: 'AdminApplicant',
    component: AdminApplicant
  },
  // {
  //   path: '/AdminProfile',
  //   name: 'AdminProfile',
  //   component: AdminProfile
  // },
  {
    path: '/AdminForms',
    name: 'AdminForms',
    component: AdminForms
  },
  {
    path: '/SsForm',
    name: 'SsForm',
    component: SsForm
  },
  {
    path: '/ScholarAppForm',
    name: 'ScholarAppForm',
    component: ScholarAppForm
  },
  {
    path: '/EnterpriseDevelopment',
    name: 'EnterpriseDevelopment',
    component: EnterpriseDevelopment
  },
  {
    path: '/EstablishmentSurvey',
    name: 'EstablishmentSurvey',
    component: EstablishmentSurvey
  },
  {
    path: '/EntrepreneurialProgram',
    name: 'EntrepreneurialProgram',
    component: EntrepreneurialProgram
  },
  {
    path: '/AdminAnnouncement',
    name: 'AdminAnnouncement',
    component: AdminAnnouncement
  },
  {
    path: '/HiredApplicants',
    name: 'HiredApplicants',
    component: HiredApplicants
  },
  {
    path: '/DailyApplicants',
    name: 'DailyApplicants',
    component: DailyApplicants
  },
  {
    path: '/DialogStudentList/:id?',
    name: 'DialogStudentList',
    component: DialogStudentList
  },


]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
