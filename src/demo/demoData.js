// Demo data for DataContext API endpoints

export const demoData = {
  // Home Company Data
  homeCompanyDetails: {
    StatusFl: true,
    Msg: "Success",
    COMPANY_KEY: "COMP001",
    COMPANY_NAME: "Demo Corporation",
    LOGO_URL: "/logo/demo-logo.png",
    COMPANY_ADDRESS: "123 Demo Street, City, Country"
  },

  // All Companies List
  allCompaniesList: [
    {
      COMPANY_KEY: "COMP001",
      COMPANY_NAME: "Demo Corporation",
      LOGO_URL: "/logo/demo-logo.png",
      COMPANY_ADDRESS: "123 Demo Street, City, Country"
    },
    {
      COMPANY_KEY: "COMP002",
      COMPANY_NAME: "Test Inc.",
      LOGO_URL: "/logo/test-logo.png",
      COMPANY_ADDRESS: "456 Test Avenue, City, Country"
    }
  ],

  // User Profile Data
  userProfile: {
    UserName: "John Doe",
    LoginId: "JD001",
    userMobile: "+1234567890",
    Bio: "Senior Developer with 5 years of experience",
    UserImage: "/images/profile/john-doe.jpg"
  },

  // Dashboard Data
  dashboardData: {
    StatusFl: true,
    Msg: "Success",
    TotalMembers: 150,
    ActiveProjects: 8,
    UpcomingEvents: 3,
    RecentActivities: [
      { id: 1, title: "Project Meeting", date: "2023-12-15", time: "10:00 AM" },
      { id: 2, title: "Team Lunch", date: "2023-12-16", time: "12:30 PM" }
    ]
  },

  // Calendar Data
  calendarData: {
    StatusFl: true,
    Msg: "Success",
    Events: [
      { id: 1, title: "Quarterly Review", date: "2023-12-18", time: "9:00 AM" },
      { id: 2, title: "Team Workshop", date: "2023-12-19", time: "2:00 PM" }
    ]
  },

  // Company Structure
  companyStructure: {
    StatusFl: true,
    Msg: "Success",
    CommitteeStructure: [
      {
        id: 1,
        name: "Board of Directors",
        members: ["John Smith", "Jane Doe", "Mike Johnson"]
      },
      {
        id: 2,
        name: "Audit Committee",
        members: ["Robert Brown", "Lisa Wilson"]
      }
    ]
  },

  // Company News
  companyNews: {
    StatusFl: true,
    Msg: "Success",
    NewsList: [
      {
        id: 1,
        title: "Company Annual Report Released",
        date: "2023-12-01",
        content: "The annual report for this year has been published and is now available for all stakeholders."
      },
      {
        id: 2,
        title: "New Office Location Opened",
        date: "2023-11-25",
        content: "We are excited to announce our new office in downtown area with modern facilities."
      }
    ]
  },

  // Company Composition
  companyComposition: {
    StatusFl: true,
    Msg: "Success",
    CommitteeComposition: [
      {
        id: 1,
        name: "Board of Directors",
        totalMembers: 5,
        activeMembers: 4,
        inactiveMembers: 1
      },
      {
        id: 2,
        name: "Audit Committee",
        totalMembers: 3,
        activeMembers: 3,
        inactiveMembers: 0
      }
    ]
  },

  // My Documents List
  myDocs: {
    StatusFl: true,
    Msg: "Success",
    DocTypes: [
      { id: 1, name: "Contracts", count: 5 },
      { id: 2, name: "Agreements", count: 3 }
    ]
  },

  // Company Documents List
  compDocs: {
    StatusFl: true,
    Msg: "Success",
    DocTypes: [
      { id: 1, name: "Policies", count: 8 },
      { id: 2, name: "Forms", count: 12 }
    ]
  },

  // User Profile
  userProfile: {
    UserName: "John Doe",
    LoginId: "JD001",
    userMobile: "+1234567890",
    Bio: "Senior Manager at Tech Corp",
    UserImage: "/images/profile.jpg"
  },

  // Dashboard Data
  dashboardData: {
    StatusFl: true,
    Msg: "Success",
    TotalMembers: 150,
    ActiveProjects: 12,
    UpcomingEvents: 3,
    RecentActivities: [
      { id: 1, title: "Project Update", date: "2023-12-15" },
      { id: 2, title: "Meeting Scheduled", date: "2023-12-16" }
    ]
  },

  // Home Company Details
  homeCompanyDetails: {
    StatusFl: true,
    Msg: "Success",
    COMPANY_KEY: "COMP001",
    COMPANY_NAME: "Tech Corp"
  },

  // Login Response
  loginResponse: {
    StatusFl: true,
    Msg: "Login successful",
    Token: "sample_token_1234567890",
    User: {
      UserName: "John Doe",
      LoginId: "JD001",
      Email: "john.doe@example.com"
    }
  },

  // Password Policy
  passwordPolicy: [
    { id: 1, policy: "Minimum 8 characters required" },
    { id: 2, policy: "Must include uppercase and lowercase letters" },
    { id: 3, policy: "Requires at least one special character" }
  ],

  // Company Identifier Response
  companyIdentifierResponse: {
    StatusFl: true,
    Msg: "Company found",
    COMPANY_KEY: "COMP001",
    COMPANY_NAME: "Tech Corp"
  },

  // Error Response
  errorResponse: {
    StatusFl: false,
    Msg: "Invalid credentials provided"
  }
}


