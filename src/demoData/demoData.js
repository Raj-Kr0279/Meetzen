/*
  Demo data for dummy API / mock responses.
  Use: import { demoData } from "../demoData/demoData";
*/

export const demoData = {
    profile: {
        company: {
            id: "cmp_niit_001",
            name: "NIIT Technologies Pvt. Ltd.",
            legalName: "NIIT Technologies Pvt. Ltd.",
            timezone: "Asia/Kolkata",
            address: {
                line1: "Plot No. 3, IT Park",
                line2: "Phase 2",
                city: "Gurugram",
                state: "Haryana",
                country: "India",
                postalCode: "122018",
            },
        },
        user: {
            id: "usr_0007",
            fullName: "Kumar Reddy",
            role: "Company Secretary",
            email: "kumar.reddy@niit.example",
            phone: "+91-98765-43210",
            Bio: "Senior Developer with 5 years of experience",
            avatar: "profileDummy.png",
            UserImage: "/images/profile/john-doe.jpg"
        },
    },
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

    meetings: [
        {
            id: "meet_202_004",
            type: "Audit",
            committeeName: "202nd Audit Committee Meeting",
            meetingNo: 202,
            committeeCode: "audit",
            status: "recent",
            startAt: "2023-05-15T11:00:00+05:30",
            endAt: "2023-05-15T13:00:00+05:30",
            location: {
                label: "Connaught Place",
                mapQuery: "Connaught Place, New Delhi",
            },
            membersAccepted: 30,
            membersTotal: 40,
        },
        {
            id: "meet_301_005",
            type: "Finance",
            committeeName: "301st Finance Committee Meeting",
            meetingNo: 301,
            committeeCode: "finance",
            status: "upcoming",
            startAt: "2023-06-08T09:30:00+05:30",
            endAt: "2023-06-08T11:30:00+05:30",
            location: {
                label: "Marine Drive",
                mapQuery: "Marine Drive, Mumbai",
            },
            membersAccepted: 18,
            membersTotal: 30,
        },
        {
            id: "meet_302_006",
            type: "Finance",
            committeeName: "302nd Finance Committee Meeting",
            meetingNo: 302,
            committeeCode: "finance",
            status: "recent",
            startAt: "2023-05-10T15:00:00+05:30",
            endAt: "2023-05-10T17:00:00+05:30",
            location: {
                label: "Anna Nagar",
                mapQuery: "Anna Nagar, Chennai",
            },
            membersAccepted: 26,
            membersTotal: 30,
        },
        {
            id: "meet_401_007",
            type: "HR",
            committeeName: "401st HR Committee Meeting",
            meetingNo: 401,
            committeeCode: "hr",
            status: "upcoming",
            startAt: "2023-06-12T14:00:00+05:30",
            endAt: "2023-06-12T16:00:00+05:30",
            location: {
                label: "Sector 18",
                mapQuery: "Sector 18, Noida",
            },
            membersAccepted: 14,
            membersTotal: 25,
        },
        {
            id: "meet_402_008",
            type: "HR",
            committeeName: "402nd HR Committee Meeting",
            meetingNo: 402,
            committeeCode: "hr",
            status: "recent",
            startAt: "2023-05-05T10:30:00+05:30",
            endAt: "2023-05-05T12:00:00+05:30",
            location: {
                label: "Salt Lake",
                mapQuery: "Salt Lake, Kolkata",
            },
            membersAccepted: 20,
            membersTotal: 25,
        },
        {
            id: "meet_501_009",
            type: "Risk Management",
            committeeName: "501st Risk Management Committee Meeting",
            meetingNo: 501,
            committeeCode: "risk_management",
            status: "upcoming",
            startAt: "2023-06-20T13:30:00+05:30",
            endAt: "2023-06-20T15:30:00+05:30",
            location: {
                label: "Viman Nagar",
                mapQuery: "Viman Nagar, Pune",
            },
            membersAccepted: 16,
            membersTotal: 28,
        },
    ],

    notifications: [
        {
            id: "noti_001",
            title: "80th Meeting of Board Committee",
            message:
                "Agenda has been circulated. Please review the documents before the meeting date.",
            category: "meeting",
            createdAt: "2023-07-23T17:45:00+05:30",
            read: false,
        },
        {
            id: "noti_002",
            title: "Draft Minutes Ready for Review",
            message:
                "Draft minutes for the 201st Audit Committee are available. Comments close in 2 days.",
            category: "minutes",
            createdAt: "2023-07-21T11:20:00+05:30",
            read: false,
        },
        {
            id: "noti_003",
            title: "Resolution by Circulation",
            message:
                "Voting window opened for Resolution RC-2023-014. Submit your response before 5:00 PM.",
            category: "resolution",
            createdAt: "2023-07-20T09:10:00+05:30",
            read: true,
        },
    ],

    chats: [
        {
            id: "chat_001",
            participants: [
                { id: "usr_0007", name: "Kumar Reddy" },
                { id: "usr_0103", name: "Brenda White" },
            ],
            lastMessage: {
                by: "usr_0103",
                text: "Please share any updates on the agenda annexure.",
                time: "12:00",
            },
            messages: [
                {
                    id: "msg_001",
                    by: "usr_0103",
                    text: "Please share any updates on the agenda annexure.",
                    time: "11:55",
                },
                {
                    id: "msg_002",
                    by: "usr_0007",
                    text: "Will send by EOD. Meanwhile, check the latest draft minutes draft.",
                    time: "11:58",
                },
            ],
        },
        {
            id: "chat_002",
            participants: [
                { id: "usr_0007", name: "Kumar Reddy" },
                { id: "usr_0201", name: "Ayesha Khan" },
            ],
            lastMessage: {
                by: "usr_0201",
                text: "Can we finalize the quorum confirmation list?",
                time: "14:10",
            },
            messages: [
                {
                    id: "msg_003",
                    by: "usr_0201",
                    text: "Can we finalize the quorum confirmation list?",
                    time: "14:10",
                },
                {
                    id: "msg_004",
                    by: "usr_0007",
                    text: "Yes—upload it under Documents > Annexures.",
                    time: "14:12",
                },
            ],
        },
        {
            id: "chat_003",
            participants: [
                { id: "usr_0007", name: "Kumar Reddy" },
                { id: "usr_0309", name: "Rohit Mehra" },
            ],
            lastMessage: {
                by: "usr_0309",
                text: "Received. I’ll review the circular resolution draft.",
                time: "09:40",
            },
            messages: [
                {
                    id: "msg_005",
                    by: "usr_0309",
                    text: "Received. I’ll review the circular resolution draft.",
                    time: "09:40",
                },
                {
                    id: "msg_006",
                    by: "usr_0007",
                    text: "Thanks! Please submit your notes before tomorrow noon.",
                    time: "09:42",
                },
            ],
        },
    ],

    draftMinutes: [
        {
            id: "draft_001",
            committee: "AUDIT COMMITTEE",
            documentTitle: "Stakeholders Relationship Committee - Draft Minutes",
            status: "approved",
            createdAt: "2023-04-03T09:45:00+05:30",
            meetingRefId: "meet_201_003",
            editor: "Kumar Reddy",
            actions: {
                canEdit: true,
                canSubmit: true,
            },
        },
        {
            id: "draft_002",
            committee: "BOARD COMMITTEE",
            documentTitle: "Board Committee - Draft Minutes (Annexure A & B)",
            status: "pending",
            createdAt: "2023-04-11T15:10:00+05:30",
            meetingRefId: "meet_132_001",
            editor: "Ayesha Khan",
            actions: {
                canEdit: true,
                canSubmit: true,
            },
        },
        {
            id: "draft_003",
            committee: "SRC",
            documentTitle: "SRC Minutes Draft: Compliance Review",
            status: "approved",
            createdAt: "2023-03-28T11:05:00+05:30",
            meetingRefId: "meet_133_002",
            editor: "Rohit Mehra",
            actions: {
                canEdit: false,
                canSubmit: false,
            },
        },
    ],

    finalMinutes: [
        {
            id: "final_001",
            committee: "AUDIT COMMITTEE",
            documentName: "Document Name - Final Minutes (Audit Committee)",
            meetingRefId: "meet_201_003",
            dateTime: "2023-04-03T09:45:00+05:30",
            version: "v1",
        },
        {
            id: "final_002",
            committee: "BOARD COMMITTEE",
            documentName: "Document Name - Final Minutes (Board Committee)",
            meetingRefId: "meet_132_001",
            dateTime: "2023-04-22T13:20:00+05:30",
            version: "v2",
        },
        {
            id: "final_003",
            committee: "SRC",
            documentName: "Document Name - Final Minutes (SRC)",
            meetingRefId: "meet_133_002",
            dateTime: "2023-04-30T10:05:00+05:30",
            version: "v1",
        },
    ],

    boardEvaluations: [
        {
            id: "eval_001",
            committee: "AUDIT COMMITTEE",
            documentName: "Stakeholders Relationship Committee",
            evaluationFor: "MR. RAMCHARAN DAS (Managing Director)",
            dueDate: "2023-06-20",
            questionsAttempted: 4,
            questionsTotal: 5,
            marksObtained: 4,
            marksTotal: 5,
            status: "pending",
            pendingDaysLeft: 15,
        },
        {
            id: "eval_002",
            committee: "BOARD COMMITTEE",
            documentName: "Nomination and Remuneration Committee",
            evaluationFor: "MS. PRIYA NAIR (Independent Director)",
            dueDate: "2023-06-25",
            questionsAttempted: 5,
            questionsTotal: 5,
            marksObtained: 5,
            marksTotal: 5,
            status: "submitted",
            pendingDaysLeft: 0,
        },
        {
            id: "eval_003",
            committee: "SRC",
            documentName: "Audit Committee",
            evaluationFor: "MR. VIKRAM SINGH (Chief Compliance Officer)",
            dueDate: "2023-06-30",
            questionsAttempted: 2,
            questionsTotal: 5,
            marksObtained: 2,
            marksTotal: 5,
            status: "pending",
            pendingDaysLeft: 20,
        },
    ],

    // Circular resolutions by circulation
    circularResolutonLists: [
        {
            id: "cr_001",
            resolutionNo: "RC-2023-014",
            committeeCode: "board_meetig",
            committeeName: "BOARD COMMITTEE",
            subject: "Adoption of amended Corporate Governance Policy",
            status: "voting_open",
            startAt: "2023-07-20T09:10:00+05:30",
            endAt: "2023-07-20T17:00:00+05:30",
            createdBy: "Kumar Reddy",
            directorsVotedCount: 6,
            directorsTotalCount: 10,
            votes: {
                ascent: 4,
                dissent: 1,
                abstain: 1,
                vote: 0,
            },
            myVote: "",
        },
        {
            id: "cr_002",
            resolutionNo: "RC-2023-021",
            committeeCode: "audit",
            committeeName: "AUDIT COMMITTEE",
            subject: "Appointment of Statutory Auditor for FY 2023-24",
            status: "pending_my_review",
            startAt: "2023-07-22T10:00:00+05:30",
            endAt: "2023-07-23T15:30:00+05:30",
            createdBy: "Ayesha Khan",
            directorsVotedCount: 5,
            directorsTotalCount: 10,
            votes: {
                ascent: 3,
                dissent: 1,
                abstain: 1,
                vote: 0,
            },
            myVote: "",
        },
        {
            id: "cr_003",
            resolutionNo: "RC-2023-027",
            committeeCode: "src",
            committeeName: "SRC",
            subject: "Approval of Related Party Transactions policy update",
            status: "submitted",
            startAt: "2023-07-18T08:20:00+05:30",
            endAt: "2023-07-19T18:00:00+05:30",
            createdBy: "Rohit Mehra",
            directorsVotedCount: 8,
            directorsTotalCount: 12,
            votes: {
                ascent: 5,
                dissent: 2,
                abstain: 1,
                vote: 0,
            },
            myVote: "ascent",
        },
        {
            id: "cr_004",
            resolutionNo: "RC-2023-032",
            committeeCode: "board_meetig",
            committeeName: "BOARD COMMITTEE",
            subject: "Ratification of interim dividend distribution",
            status: "voting_open",
            startAt: "2023-07-24T09:30:00+05:30",
            endAt: "2023-07-24T16:45:00+05:30",
            createdBy: "Kumar Reddy",
            directorsVotedCount: 3,
            directorsTotalCount: 9,
            votes: {
                ascent: 1,
                dissent: 1,
                abstain: 1,
                vote: 0,
            },
            myVote: "",
        },
    ],
};


