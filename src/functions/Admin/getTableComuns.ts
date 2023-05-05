const ele = [
  [
    {
      name: "Submitted by",
      selector: "submittedBy",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Date",
      selector: "Date",
    },
    {
      name: "Name",
      selector: "Name",
    },
    {
      name: "Technology",
      selector: "Technology",
      grow: 2,
    },
    {
      name: "Visa",
      selector: "Visa",
    },
    {
      name: "Experience",
      selector: "Experience",
    },
    {
      name: "w2",
      selector: "W2",
    },
    {
      name: "Location",
      selector: "Loc",
    },
    {
      name: "1/2 Job",
      selector: "oneTwoJob",
    },
    {
      name: "Onsite",
      selector: "Onsite",
    },
    {
      name: "Rate",
      selector: "Rate",
    },
    {
      name: "Email",
      selector: "Email",
      grow: 2,
    },
    {
      name: "Mob Number",
      selector: "MobileNumber",
    },
    {
      name: "SSN",
      selector: "SSN",
    },
    {
      name: "LinkedIn",
      selector: "LinkedIn",
      grow: 2,
    },
    {
      name: "Payment Mode",
      selector: "PaymentMode",
    },
    {
      name: "US Entry year",
      selector: "Us",
    },
    {
      name: "Availability",
      selector: "Availability",
    },
    {
      name: "Support",
      selector: "Support",
    },
    {
      name: "Comments",
      selector: "Comments",
      grow: 2,
    },
  ],
  [
    {
      name: "Submitted By",
      selector: "submittedBy",
      grow: 2,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
        minHeight: "100px",
      },
    },
    {
      name: "Name",
      selector: "Name",
    },
    {
      name: "Email",
      selector: "Email",
    },
    {
      name: "Organization",
      selector: "Organization",
    },

    {
      name: "Mobile Number",
      selector: "MobileNumber",
    },
    {
      name: "Recruiter",
      selector: "Recruiter",
    },
    {
      name: "Comments",
      selector: "Comments",
    },
  ],
  [
    {
      name: "Submitted by",
      selector: "submittedBy",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Name",
      selector: "Name",
    },
    {
      name: "Feedback",
      selector: "Feedback",
    },
  ],
  [
    {
      name: "Submitted by",
      selector: "SubmittedBy",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Date",
      selector: "Date",
    },
    {
      name: "Candidate Name",
      selector: "CandidateName",
    },
    {
      name: "Technology",
      selector: "Technology",
    },

    {
      name: "Timing",
      selector: "Timing",
    },
    {
      name: "Round",
      selector: "Round",
    },
    {
      name: "CallDuration",
      selector: "CallDuration",
    },
    {
      name: "Feedback",
      selector: "Feedback",
    },
    {
      name: "Support",
      selector: "Support",
    },
  ],
  [
    {
      name: "Submitted by",
      selector: "SubmittedBy",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "name",
      selector: "name",
    },
    {
      name: "Date",
      selector: "Date",
    },
    {
      name: "technology",
      selector: "technology",
    },
    {
      name: "visa",
      selector: "visa",
    },

    {
      name: "experience",
      selector: "experience",
    },
    {
      name: "location",
      selector: "location",
    },
    {
      name: "rate",
      selector: "rate",
    },
    {
      name: "canEmail",
      selector: "canEmail",
    },
    {
      name: "canPhNo",
      selector: "canPhNo",
    },
    {
      name: "empMail",
      selector: "empMail",
    },
    {
      name: "empNumber",
      selector: "empNumber",
    },
    {
      name: "status",
      selector: "status",
    },
  ],
  [
    {
      name: "Submitted by",
      selector: "submittedBy",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Name",
      selector: "Name",
    },
    {
      name: "Rate",
      selector: "Rate",
    },
    {
      name: "Date",
      selector: "Date",
    },
    {
      name: "E mail",
      selector: "Email",
      grow: 3,
    },
    {
      name: "Organization",
      selector: "Organization",
      grow: 2,
    },
    {
      name: "Mobile Number",
      selector: "MobileNumber",
      grow: 2,
    },
    {
      name: "Candidate",
      selector: "Candidate",
      grow: 2,
    },
    {
      name: "End Client",
      selector: "EndClient",
      grow: 2,
    },
    {
      name: "Feedback",
      selector: "Feedback",
    },
  ],
  [
    {
      name: "Submitted by",
      selector: "submittedBy",
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Name",
      selector: "name",
    },

    {
      name: "Date",
      selector: "Date",
    },
    {
      name: "technology",
      selector: "technology",
      grow: 3,
    },
    {
      name: "visa",
      selector: "visa",
      grow: 2,
    },
    {
      name: "relocation",
      selector: "relocation",
      grow: 2,
    },
    {
      name: "expected rate",
      selector: "expectedRate",
      grow: 2,
    },
    {
      name: "client rate",
      selector: "clientRate",
      grow: 2,
    },
    {
      name: "recruiter mail",
      selector: "recruiterMail",
    },
    {
      name: "recruiter Number",
      selector: "recruiterNumber",
    },
    {
      name: "required ID",
      selector: "requiredId",
    },
    {
      name: "recruiter name",
      selector: "recruiterName",
    },
  ],
];

export function getTableColumns(value: number) {
  return ele[value];
}
