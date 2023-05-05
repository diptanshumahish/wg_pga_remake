const ele = [
  [
    {
      name: "Submitted by",
      selector: (row) => row.submittedBy,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Date",
      selector: (row) => row.Date,
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Technology",
      selector: (row) => row.Technology,
      grow: 2,
    },
    {
      name: "Visa",
      selector: (row) => row.Visa,
    },
    {
      name: "Experience",
      selector: (row) => row.Experience,
    },
    {
      name: "w2",
      selector: (row) => row.W2,
    },
    {
      name: "Location",
      selector: (row) => row.Loc,
    },
    {
      name: "1/2 Job",
      selector: (row) => row.oneTwoJob,
    },
    {
      name: "Onsite",
      selector: (row) => row.Onsite,
    },
    {
      name: "Rate",
      selector: (row) => row.Rate,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
      grow: 2,
    },
    {
      name: "Mob Number",
      selector: (row) => row.MobileNumber,
    },
    {
      name: "SSN",
      selector: (row) => row.SSN,
    },
    {
      name: "LinkedIn",
      selector: (row) => row.LinkedIn,
      grow: 2,
    },
    {
      name: "Payment Mode",
      selector: (row) => row.PaymentMode,
    },
    {
      name: "US Entry year",
      selector: (row) => row.Us,
    },
    {
      name: "Availability",
      selector: (row) => row.Availability,
    },
    {
      name: "Support",
      selector: (row) => row.Support,
    },
    {
      name: "Comments",
      selector: (row) => row.Comments,
      grow: 2,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
  [
    {
      name: "Submitted By",
      selector: (row) => row.submittedBy,
      grow: 2,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
        minHeight: "100px",
      },
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Email",
      selector: (row) => row.Email,
    },
    {
      name: "Organization",
      selector: (row) => row.Organization,
    },

    {
      name: "Mobile Number",
      selector: (row) => row.MobileNumber,
    },
    {
      name: "Recruiter",
      selector: (row) => row.Recruiter,
    },
    {
      name: "Comments",
      selector: (row) => row.Comments,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
  [
    {
      name: "Submitted by",
      selector: (row) => row.submittedBy,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Feedback",
      selector: (row) => row.Feedback,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
  [
    {
      name: "Submitted by",
      selector: (row) => row.SubmittedBy,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Date",
      selector: (row) => row.Date,
    },
    {
      name: "Candidate Name",
      selector: (row) => row.CandidateName,
    },
    {
      name: "Technology",
      selector: (row) => row.Technology,
    },

    {
      name: "Timing",
      selector: (row) => row.Timing,
    },
    {
      name: "Round",
      selector: (row) => row.Round,
    },
    {
      name: "CallDuration",
      selector: (row) => row.CallDuration,
    },
    {
      name: "Feedback",
      selector: (row) => row.Feedback,
    },
    {
      name: "Support",
      selector: (row) => row.Support,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
  [
    {
      name: "Submitted by",
      selector: (row) => row.SubmittedBy,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
    },
    {
      name: "technology",
      selector: (row) => row.technology,
    },
    {
      name: "visa",
      selector: (row) => row.visa,
    },

    {
      name: "experience",
      selector: (row) => row.experience,
    },
    {
      name: "location",
      selector: (row) => row.location,
    },
    {
      name: "rate",
      selector: (row) => row.rate,
    },
    {
      name: "canEmail",
      selector: (row) => row.canEmail,
    },
    {
      name: "canPhNo",
      selector: (row) => row.canPhNo,
    },
    {
      name: "empMail",
      selector: (row) => row.empMail,
    },
    {
      name: "empNumber",
      selector: (row) => row.empNumber,
    },
    {
      name: "status",
      selector: (row) => row.status,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
  [
    {
      name: "Submitted by",
      selector: (row) => row.submittedBy,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Name",
      selector: (row) => row.Name,
    },
    {
      name: "Rate",
      selector: (row) => row.Rate,
    },
    {
      name: "Date",
      selector: (row) => row.Date,
    },
    {
      name: "E mail",
      selector: (row) => row.Email,
      grow: 3,
    },
    {
      name: "Organization",
      selector: (row) => row.Organization,
      grow: 2,
    },
    {
      name: "Mobile Number",
      selector: (row) => row.MobileNumber,
      grow: 2,
    },
    {
      name: "Candidate",
      selector: (row) => row.Candidate,
      grow: 2,
    },
    {
      name: "End Client",
      selector: (row) => row.EndClient,
      grow: 2,
    },
    {
      name: "Feedback",
      selector: (row) => row.Feedback,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
      grow: 2,
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
  [
    {
      name: "Submitted by",
      selector: (row) => row.submittedBy,
      style: {
        backgroundColor: "rgba(63, 195, 128, 0.9)",
        color: "white",
      },
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },

    {
      name: "Date",
      selector: (row) => row.Date,
    },
    {
      name: "technology",
      selector: (row) => row.technology,
      grow: 3,
    },
    {
      name: "visa",
      selector: (row) => row.visa,
      grow: 2,
    },
    {
      name: "relocation",
      selector: (row) => row.relocation,
      grow: 2,
    },
    {
      name: "expected rate",
      selector: (row) => row.expectedRate,
      grow: 2,
    },
    {
      name: "client rate",
      selector: (row) => row.clientRate,
      grow: 2,
    },
    {
      name: "recruiter mail",
      selector: (row) => row.recruiterMail,
    },
    {
      name: "recruiter Number",
      selector: (row) => row.recruiterNumber,
    },
    {
      name: "required ID",
      selector: (row) => row.requiredId,
    },
    {
      name: "recruiter name",
      selector: (row) => row.recruiterName,
    },
    {
      name: "Submission date",
      selector: (row) => row.SubmissionDate.toDate().toDateString(),
      grow: 2,
    },
    {
      name: "Submission Time",
      selector: (row) =>
        `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`,
    },
  ],
];

export function getTableColumns(value: number) {
  return ele[value];
}
