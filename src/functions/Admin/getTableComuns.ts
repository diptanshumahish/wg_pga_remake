const columndata = [
  [
    {
        name: 'Submitted by',
        selector: (row: { submittedBy: any; }) => row.submittedBy,
        style: {
            backgroundColor: 'rgba(63, 195, 128, 0.9)',
            color: 'white',
        },

    },
    {
        name: 'Name',
        selector: (row: { Name: any; }) => row.Name,

    },
    {
        name: 'Rate',
        selector: (row: { Rate: any; }) => row.Rate,

    },
    {
        name: 'Date',
        selector: (row: { Date: any; }) => row.Date,

    },
    {
        name: 'E mail',
        selector: (row: { Email: any; }) => row.Email,
        grow: 3

    },
    {
        name: 'Organization',
        selector: (row: { Organization: any; }) => row.Organization,
        grow: 2

    },
    {
        name: 'Mobile Number',
        selector: (row: { MobileNumber: any; }) => row.MobileNumber,
        grow: 2

    },
    {
        name: 'Candidate',
        selector: (row: { Candidate: any; }) => row.Candidate,
        grow: 2

    },
    {
        name: 'End Client',
        selector: (row: { EndClient: any; }) => row.EndClient,
        grow: 2

    },
    {
        name: 'Feedback',
        selector: (row: { Feedback: any; }) => row.Feedback,

    },
    {
        name: 'Submission date',
        selector: (row: { SubmissionDate: { toDate: () => { (): any; new(): any; toDateString: { (): any; new(): any; }; }; }; })  => row.SubmissionDate.toDate().toDateString(),
        grow: 2

    },
    {
        name: 'Submission Time',
        selector: (row: { SubmissionDate: { toDate: () => { (): any; new(): any; getHours: { (): any; new(): any; }; getMinutes: { (): any; new(): any; }; }; }; }) => `${row.SubmissionDate.toDate().getHours()}:${row.SubmissionDate.toDate().getMinutes()} hrs`

    },
  ],
];

export function getTableColumns(tableIndex: number) {
  return columndata[0];
}
